import { defineCollection, z } from 'astro:content';

const petalsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    demoURL: z.string().url(),
    repoURL: z.string().url(),
    draft: z.boolean().optional(), // Add this line
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

export const collections = {
  petals: petalsCollection,
};
