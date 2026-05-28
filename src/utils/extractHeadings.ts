import { slugifyStr } from "./slugify";

interface TocHeading {
  depth: number;
  text: string;
  id: string;
}

/** Parse ## and ### headings directly from raw markdown content. */
export function extractHeadings(raw: string): TocHeading[] {
  const headings: TocHeading[] = [];
  const lines = raw.split("\n");
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)/);
    if (match) {
      const depth = match[1].length;
      const text = match[2].trim();
      headings.push({ depth, text, id: slugifyStr(text) });
    }
  }
  return headings;
}
