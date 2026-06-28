import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 記事コレクション。frontmatter のスキーマを定義する。
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    // 公開日と「料金などの最終更新日」を分けて管理（鮮度シグナル）
    published: z.coerce.date(),
    updated: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
