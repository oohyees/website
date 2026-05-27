"use client";

import { useState } from "react";

export default function Counter({
  initial = 0,
  label = "计数",
}: {
  initial?: number;
  label?: string;
}) {
  const [count, setCount] = useState(initial);

  return (
    <div className="my-6 flex items-center gap-4 p-4 rounded-lg border border-border bg-muted/20">
      <span className="text-sm font-medium">{label}:</span>
      <button
        onClick={() => setCount((c) => c - 1)}
        className="size-8 rounded-md border border-border bg-background hover:bg-muted flex items-center justify-center font-bold cursor-pointer"
      >
        -
      </button>
      <span className="text-lg font-bold tabular-nums min-w-8 text-center">
        {count}
      </span>
      <button
        onClick={() => setCount((c) => c + 1)}
        className="size-8 rounded-md border border-border bg-background hover:bg-muted flex items-center justify-center font-bold cursor-pointer"
      >
        +
      </button>
    </div>
  );
}
