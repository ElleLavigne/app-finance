import { z } from "zod";

export const zFirebaseCollection = z.enum([
    'categories', 
    'users',
    'transactions',
])

export type FirebaseCollection = z.infer<typeof zFirebaseCollection>