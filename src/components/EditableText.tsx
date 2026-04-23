import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Pencil, Check, X, Loader2 } from "lucide-react";

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

// Cache global em memória para evitar refetch
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

  // Inscrição no cache global
  useEffect(() => {
    const set = subscribers.get(id) ?? new Set();
    set.add(setValue);
    subscribers.set(id, set);
    return () => {
      set.delete(setValue);
    };
  }, [id]);

  // Carrega do banco na montagem (só uma vez por id)
  useEffect(() => {
    let cancelled = false;
    if (cache.has(id)) {
      setValue(cache.get(id)!);
      return;
    }
    (async () => {
      try {
        const { data, error } = await (supabase as any)
          .from("caderno_textos")
          .select("conteudo")
          .eq("chave", id)
          .maybeSingle();
        if (cancelled) return;
        if (!error && data?.conteudo) {
          notify(id, data.conteudo);
        } else {
          cache.set(id, defaultValue);
        }
      } catch {
        if (!cancelled) cache.set(id, defaultValue);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id, defaultValue]);

  // Foco automático ao entrar em edição
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
    const { error } = await (supabase as any)
      .from("caderno_textos")
      .upsert(
        { chave: id, conteudo: draft, atualizado_em: new Date().toISOString() },
        { onConflict: "chave" },
      );
    setSaving(false);
    if (error) {
      setError(error.message);
      return;
    }
    notify(id, draft);
    setEditing(false);
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
      <span className="inline-flex flex-col gap-2 w-full no-print">
        {multiline ? (
          <textarea
            ref={(el) => {
              inputRef.current = el;
            }}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKey}
            rows={Math.min(10, Math.max(3, draft.split("\n").length + 1))}
            className="w-full rounded-lg border-2 border-primary bg-white px-3 py-2 text-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/30 font-sans text-base leading-relaxed"
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
          <span className="text-[10px] text-muted-foreground ml-auto">
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
        ? value.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < value.split("\n").length - 1 && <br />}
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
        className="no-print opacity-0 group-hover/edit:opacity-100 transition-opacity ml-1.5 inline-flex items-center justify-center h-5 w-5 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground align-middle"
      >
        <Pencil className="h-3 w-3" />
      </button>
    </Tag>
  );
}
