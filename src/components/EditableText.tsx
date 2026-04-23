import { useEffect, useMemo, useRef, useState, type ElementType, type ReactNode } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Pencil, Check, X, Loader2 } from "lucide-react";
import { loadEditableText, saveEditableText } from "@/lib/editable-text.functions";

interface EditableTextProps {
  /** Identificador único do texto no banco. Ex: "planejamento.cta.titulo" */
  id: string;
  /** Texto padrão (fallback) caso ainda não tenha sido editado */
  defaultValue: string;
  /** Tag HTML a ser renderizada (h1, h2, p, span, div...) */
  as?: ElementType;
  /** Classes Tailwind aplicadas no elemento renderizado */
  className?: string;
  /** Renderizar como textarea (multilinhas) ao editar */
  multiline?: boolean;
  /** Children opcional (ignorado se houver valor salvo / defaultValue) */
  children?: ReactNode;
}

const cache = new Map<string, string>();
const subscribers = new Map<string, Set<(v: string) => void>>();

function notify(id: string, value: string) {
  cache.set(id, value);
  subscribers.get(id)?.forEach((cb) => cb(value));
}

export function EditableText({
  id,
  defaultValue,
  as: Tag = "span",
  className,
  multiline = false,
}: EditableTextProps) {
  const [value, setValue] = useState<string>(() => cache.get(id) ?? defaultValue);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement | null>(null);
  const lines = useMemo(() => value.split("\n"), [value]);
  const loadEditableTextFn = useServerFn(loadEditableText);
  const saveEditableTextFn = useServerFn(saveEditableText);

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

    if (cache.has(id)) {
      const cachedValue = cache.get(id) ?? defaultValue;
      setValue(cachedValue);
      setDraft(cachedValue);
      return;
    }

    (async () => {
      try {
        const result = await loadEditableTextFn({ data: { id, defaultValue } });
        if (cancelled) return;
        notify(id, result.value);
        setDraft(result.value);
      } catch {
        if (cancelled) return;
        notify(id, defaultValue);
        setDraft(defaultValue);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [defaultValue, id, loadEditableTextFn]);

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

    try {
      const result = await saveEditableTextFn({ data: { id, content: draft } });
      notify(id, result.value);
      setEditing(false);
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
    </Tag>
  );
}
