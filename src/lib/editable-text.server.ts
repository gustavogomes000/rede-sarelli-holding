import { supabaseAdmin } from "@/integrations/supabase/client.server";

const FALLBACK_PREFIX = "editable_text:";
const MISSING_TABLE_CODES = new Set(["42P01", "PGRST205"]);

function getFallbackKey(id: string) {
  return `${FALLBACK_PREFIX}${id}`;
}

function isMissingTableError(error: unknown) {
  if (!error || typeof error !== "object") return false;

  const code = "code" in error && typeof error.code === "string" ? error.code : undefined;
  const message = "message" in error && typeof error.message === "string" ? error.message : "";

  return MISSING_TABLE_CODES.has(code ?? "") || message.includes("Could not find the table") || message.includes("caderno_textos");
}

async function readFromCadernoTextos(id: string) {
  const { data, error } = await (supabaseAdmin as any)
    .from("caderno_textos")
    .select("conteudo")
    .eq("chave", id)
    .maybeSingle();

  if (error) throw error;
  return typeof data?.conteudo === "string" ? data.conteudo : null;
}

async function readFromSiteSettings(id: string) {
  const { data, error } = await supabaseAdmin
    .from("site_settings")
    .select("setting_value, value")
    .eq("key", getFallbackKey(id))
    .maybeSingle();

  if (error) throw error;

  if (typeof data?.setting_value === "string") return data.setting_value;
  if (typeof data?.value === "string") return data.value;
  return null;
}

export async function getEditableTextValue(id: string) {
  try {
    return await readFromCadernoTextos(id);
  } catch (error) {
    if (!isMissingTableError(error)) throw error;
    return readFromSiteSettings(id);
  }
}

export async function saveEditableTextValue(id: string, content: string) {
  try {
    const { error } = await (supabaseAdmin as any)
      .from("caderno_textos")
      .upsert(
        {
          chave: id,
          conteudo: content,
          atualizado_em: new Date().toISOString(),
        },
        { onConflict: "chave" },
      );

    if (error) throw error;
    return { storage: "caderno_textos" as const };
  } catch (error) {
    if (!isMissingTableError(error)) throw error;

    const { error: fallbackError } = await (supabaseAdmin as any)
      .from("site_settings")
      .upsert(
        {
          key: getFallbackKey(id),
          setting_key: id,
          setting_value: content,
          value: content,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "key" },
      );

    if (fallbackError) throw fallbackError;
    return { storage: "site_settings" as const };
  }
}
