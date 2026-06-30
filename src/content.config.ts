import { defineCollection, z } from 'astro:content';
const blog = defineCollection({ type: 'content', schema: z.object({ title: z.string(), excerpt: z.string(), publishDate: z.coerce.date(), tags: z.array(z.string()).default([]), draft: z.boolean().default(false), featured: z.boolean().default(false), readTime: z.string().default('6 min read') }) });
export const collections = { blog };
