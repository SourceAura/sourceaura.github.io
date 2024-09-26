import { defineCollection, z } from 'astro:content';

const petalsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    demoURL: z.string().url(),
    repoURL: z.string().url(),
    image: z.string(), // Change this to accept a string
    draft: z.boolean(),
  }),
});

export const collections = {
  petals: petalsCollection,
};
