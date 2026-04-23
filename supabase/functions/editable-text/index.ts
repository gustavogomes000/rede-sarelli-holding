import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js/cors";

const SETTINGS_KEY = "editable_text_content";

type LoadPayload = {
  action: "load";
  id: string;
};

type SavePayload = {
  action: "save";
  id: string;
  content: string;
};

type Payload = LoadPayload | SavePayload;

type TextMap = Record<string, string>;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

function validateId(id: unknown) {
  const normalized = typeof id === "string" ? id.trim() : "";

  if (!normalized || normalized.length > 200) {
    throw new Error("Chave de texto inválida.");
  }

  return normalized;
}

function validateContent(content: unknown) {
  if (typeof content !== "string") {
    throw new Error("Conteúdo inválido.");
  }

  if (content.length > 20000) {
    throw new Error("Texto muito grande para salvar.");
  }

  return content;
}

function parseStoredValue(value: unknown): TextMap {
  if (!value) return {};

  if (typeof value === "object" && !Array.isArray(value)) {
    return Object.fromEntries(
      Object.entries(value).filter((entry): entry is [string, string] => typeof entry[1] === "string"),
    );
  }

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return Object.fromEntries(
          Object.entries(parsed).filter((entry): entry is [string, string] => typeof entry[1] === "string"),
        );
      }
    } catch {
      return {};
    }
  }

  return {};
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !serviceRoleKey) {
      throw new Error("Credenciais do Supabase não disponíveis na função.");
    }

    const admin = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const payload = (await req.json()) as Payload;
    const id = validateId(payload.id);

    const { data: row, error: readError } = await admin
      .from("site_settings")
      .select("key, setting_value, value")
      .eq("key", SETTINGS_KEY)
      .maybeSingle();

    if (readError) {
      throw readError;
    }

    const currentMap = {
      ...parseStoredValue(row?.value),
      ...parseStoredValue(row?.setting_value),
    };

    if (payload.action === "load") {
      return json({ value: currentMap[id] ?? null, storage: "site_settings" });
    }

    const content = validateContent(payload.content);
    const nextMap = {
      ...currentMap,
      [id]: content,
    };

    const { error: upsertError } = await admin.from("site_settings").upsert(
      {
        key: SETTINGS_KEY,
        setting_key: SETTINGS_KEY,
        setting_value: JSON.stringify(nextMap),
        value: nextMap,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" },
    );

    if (upsertError) {
      throw upsertError;
    }

    return json({ value: content, storage: "site_settings" });
  } catch (error) {
    return json(
      {
        error: error instanceof Error ? error.message : "Erro inesperado ao salvar texto.",
      },
      400,
    );
  }
});
