"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  securityLevel: "loose",
});

export default function Mermaid({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!code) return;
    const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
    mermaid
      .render(id, code.trim())
      .then(({ svg }) => setSvg(svg))
      .catch((e) => setError(e.message));
  }, [code]);

  if (error) {
    return (
      <div className="my-4 rounded border border-red-300 bg-red-50 dark:bg-red-950/20 p-4 text-sm text-red-600">
        Mermaid Error: {error}
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="my-4 rounded border border-border bg-muted/20 p-4 text-sm text-muted-foreground">
        Loading diagram...
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="my-6 flex justify-center overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
