import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        deploy: z.string().url(),
        type: z.string(),
        description: z.string(),
        category: z.string()
    })
})

const experienceCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        lenguages: z.string().array(),
        starting_year: z.string(),
        ending_year: z.string()
    })
})

export const collections = {
    'projects': projectCollection,
    'experiences': experienceCollection
}