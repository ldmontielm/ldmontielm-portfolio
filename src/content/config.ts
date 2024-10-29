import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        deploy: z.string().url(),
        type: z.string(),
        description: z.string(),
        category: z.string(),
        github: z.string().url()
    })
})

export const collections = {
    projects
}