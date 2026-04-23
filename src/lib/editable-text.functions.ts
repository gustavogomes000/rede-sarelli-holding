import { createServerFn } from "@tanstack/react-start";
import { getEditableTextValue, saveEditableTextValue } from "@/lib/editable-text.server";

type LoadEditableTextInput = {
  id: string;
  defaultValue?: string;
};

type SaveEditableTextInput = {
  id: string;
  content: string;
};

function validateId(id: string) {
  const normalized = typeof id === "string" ? id.trim() : "";

  if (!normalized || normalized.length > 200) {
    throw new Error("Chave de texto inválida.");
  }

  return normalized;
}

function validateDefaultValue(defaultValue?: string) {
  if (typeof defaultValue !== "string") return undefined;
  return defaultValue.slice(0, 20000);
}

function validateContent(content: string) {
  if (typeof content !== "string") {
    throw new Error("Conteúdo inválido.");
  }

  if (content.length > 20000) {
    throw new Error("Texto muito grande para salvar.");
  }

  return content;
}

export const loadEditableText = createServerFn({ method: "POST" })
  .inputValidator((data: LoadEditableTextInput) => ({
    id: validateId(data.id),
    defaultValue: validateDefaultValue(data.defaultValue),
  }))
  .handler(async ({ data }) => {
    const value = await getEditableTextValue(data.id);

    return {
      value: value ?? data.defaultValue ?? "",
    };
  });

export const saveEditableText = createServerFn({ method: "POST" })
  .inputValidator((data: SaveEditableTextInput) => ({
    id: validateId(data.id),
    content: validateContent(data.content),
  }))
  .handler(async ({ data }) => {
    const result = await saveEditableTextValue(data.id, data.content);

    return {
      value: data.content,
      storage: result.storage,
    };
  });
