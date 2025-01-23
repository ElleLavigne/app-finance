import z from 'zod'

export const zCategory = z.object({
    id: z.string(), 
    name: z.string(), 
    description: z.string(), 
    color: z.string(), 
})

export type ICategory = z.infer<typeof zCategory>