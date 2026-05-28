export interface CategoryInfo {
  label: string;
  labelZh: string;
  desc: string;
}

export const CATEGORIES: Record<string, CategoryInfo> = {
  research: { label: "Research", labelZh: "学术研究", desc: "论文阅读与科研笔记" },
  tech: { label: "Technical", labelZh: "技术文章", desc: "教程、踩坑与工具分享" },
  daily: { label: "Daily Life", labelZh: "日常随笔", desc: "思考、经验与个人成长" },
  journal: { label: "Month Journal", labelZh: "月度归档", desc: "每月回顾与记录" },
} as const;

export type Category = keyof typeof CATEGORIES;

/**
 * Filter posts that belong to the given category.
 * A post belongs to a category when its tags array includes the category’s slug.
 */
export function getPostsByCategory<T extends { data: { tags: string[] } }>(
  posts: T[],
  category: Category,
): T[] {
  return posts.filter((post) => post.data.tags.includes(category));
}
