import { useEffect, useMemo, useRef, useState, type ElementType, type ReactNode } from "react";
import { Pencil, Check, X, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface EditableTextProps {
  id: string;
  defaultValue: string;
  as?: ElementType;
  className?: string;
  multiline?: boolean;
  children?: ReactNode;
}

type SaveLocation = "database" | "local";

const LOCAL_PREFIX = "editable_text:";
const cache = new Map<string, string>();
const subscribers = new Map<string, Set<(v: string) => void>>();

function notify(id: string, value: string) {
  cache.set(id, value);
  subscribers.get(id)?.forEach((cb) => cb(value));
}

function getLocalStorageKey(id: string) {
  return `${LOCAL_PREFIX}${id}`;
}

function readLocalValue(id: string) {
  if (typeof window === "undefined") return null;

  try {
    return window.localStorage.getItem(getLocalStorageKey(id));
  } catch {
    return null;
  }
}

function writeLocalValue(id: string, value: string) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(getLocalStorageKey(id), value);
  } catch {
    // noop
  }
}

function isRecoverableError(error: unknown) {
  if (!error || typeof error !== "object") return false;

  const message = "message" in error && typeof error.message === "string" ? error.message : "";
  const details = "details" in error && typeof error.details === "string" ? error.details : "";

  return message.includes("Failed to fetch") || message.includes("FunctionsFetchError") || details.includes("Failed to send a request");
}

async function loadFromDatabase(id: string) {
  const { data, error } = await supabase.functions.invoke("editable-text", {
    body: {
      action: "load",
      id,
    },
  });

  if (error) throw error;
  return typeof data?.value === "string" ? data.value : null;
}

async function saveToDatabase(id: string, content: string): Promise<SaveLocation> {
  try {
    const { error } = await supabase.functions.invoke("editable-text", {
      body: {
        action: "save",
        id,
        content,
      },
    });

    if (error) throw error;
    return "database";
  } catch (error) {
    if (isRecoverableError(error)) return "local";
    throw error;
  }
}

export function EditableText({
  id,
  defaultValue,
  as: Tag = "span",
  className,
  multiline = false,
}: EditableTextProps) {
  const [value, setValue] = useState<string>(defaultValue);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(defaultValue);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement | null>(null);
  const lines = useMemo(() => value.split("\n"), [value]);

  useEffect(() => {
    const set = subscribers.get(id) ?? new Set();
    set.add(setValue);
    subscribers.set(id, set);
    return () => {
      set.delete(setValue);
    };
  }, [id]);

  useEffect(() => {
    let cancelled = false;

    const cachedValue = cache.get(id);
    const localValue = readLocalValue(id);
    const immediateValue = cachedValue ?? localValue ?? defaultValue;

    notify(id, immediateValue);
    setDraft(immediateValue);
    setNotice(localValue && !cachedValue ? "Usando o texto salvo neste navegador." : null);

    (async () => {
      try {
        const dbValue = await loadFromDatabase(id);
        if (cancelled || typeof dbValue !== "string") return;

        writeLocalValue(id, dbValue);
        notify(id, dbValue);
        setDraft(dbValue);
        setNotice(null);
      } catch {
        if (!cancelled && localValue) {
          setNotice("Usando o texto salvo neste navegador.");
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [defaultValue, id]);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select?.();
    }
  }, [editing]);

  const handleSave = async () => {
    if (draft === value) {
      setEditing(false);
      return;
    }

    setSaving(true);
    setError(null);
    setNotice(null);

    writeLocalValue(id, draft);
    notify(id, draft);
    setEditing(false);

    try {
      const location = await saveToDatabase(id, draft);
      if (location === "local") {
        setNotice("Texto salvo neste navegador enquanto a conexão com o banco falha.");
      }
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Não foi possível salvar o texto.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setDraft(value);
    setEditing(false);
    setError(null);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      handleCancel();
    }
    if (e.key === "Enter" && !multiline && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === "Enter" && multiline && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSave();
    }
  };

  if (editing) {
    return (
      <span className="inline-flex w-full flex-col gap-2 no-print">
        {multiline ? (
          <textarea
            ref={(el) => {
              inputRef.current = el;
            }}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKey}
            rows={Math.min(10, Math.max(3, draft.split("\n").length + 1))}
            className="w-full rounded-lg border-2 border-primary bg-white px-3 py-2 text-base leading-relaxed text-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/30 font-sans"
          />
        ) : (
          <input
            ref={(el) => {
              inputRef.current = el;
            }}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKey}
            className="w-full rounded-lg border-2 border-primary bg-white px-3 py-2 text-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/30 font-sans"
          />
        )}
        <span className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
          >
            {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Check className="h-3.5 w-3.5" />}
            Salvar
          </button>
          <button
            type="button"
            onClick={handleCancel}
            disabled={saving}
            className="inline-flex items-center gap-1 rounded-md bg-muted px-3 py-1.5 text-xs font-bold text-foreground hover:bg-muted/70"
          >
            <X className="h-3.5 w-3.5" />
            Cancelar
          </button>
          {error && <span className="text-xs text-destructive">{error}</span>}
          {notice && <span className="text-xs text-muted-foreground">{notice}</span>}
          <span className="ml-auto text-[10px] text-muted-foreground">
            {multiline ? "Ctrl+Enter para salvar · Esc cancela" : "Enter salva · Esc cancela"}
          </span>
        </span>
      </span>
    );
  }

  return (
    <Tag
      className={`group/edit relative ${className ?? ""}`}
      onDoubleClick={(e: React.MouseEvent) => {
        e.stopPropagation();
        setDraft(value);
        setEditing(true);
      }}
    >
      {multiline
        ? lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))
        : value}
      <button
        type="button"
        aria-label="Editar texto"
        onClick={(e) => {
          e.stopPropagation();
          setDraft(value);
          setEditing(true);
        }}
        className="no-print ml-1.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-primary/10 align-middle text-primary opacity-0 transition-opacity group-hover/edit:opacity-100 hover:bg-primary hover:text-primary-foreground"
      >
        <Pencil className="h-3 w-3" />
      </button>
      {notice && <span className="no-print ml-2 text-[10px] text-muted-foreground">{notice}</span>}
    </Tag>
  );
}
