"use client";

import { useState } from "react";

interface Tab {
  label: string;
  content: string;
}

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="my-6 rounded-lg border border-border overflow-hidden">
      <div className="flex border-b border-border bg-muted/30 overflow-x-auto">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
              i === active
                ? "border-b-2 border-accent text-accent bg-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="p-4 text-sm"
        dangerouslySetInnerHTML={{ __html: tabs[active].content }}
      />
    </div>
  );
}
