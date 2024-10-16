import { defineCollection, z } from 'astro:content';

const petalsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    demoURL: z.string().url(),
    repoURL: z.string().url(),
    image: z.object({ // Change this to accept an object with src and alt
      src: z.string(),
      alt: z.string(),
    }), // Updated to accept an object with src and alt
    draft: z.boolean(),
  }),
});

export const collections = {
  petals: petalsCollection,
};
