/**
 * Injects `minutesRead` into the frontmatter of each processed document.
 * The value is available as `data.minutesRead` in Astro layouts.
 */
import { toString } from "mdast-util-to-string";
import readingTime from "reading-time";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const remarkReadingTime = (): any => {
  return (tree: any, file: any) => {
    const text = toString(tree);
    const stats = readingTime(text);
    // Store on the vfile data — Astro exposes this via `remarkPluginFrontmatter`
    file.data.astro = {
      ...file.data.astro,
      frontmatter: {
        ...(file.data.astro?.frontmatter || {}),
        minutesRead: Math.max(1, Math.round(stats.minutes)),
        words: stats.words,
      },
    };
  };
};
