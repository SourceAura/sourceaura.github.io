import { defineCollection, z } from "astro:content";

const petals = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    image: z.string().optional(),
  }),
});
export const collections = { petals };
