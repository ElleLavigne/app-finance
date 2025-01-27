import { z } from "zod";
export const zTransactionType = z.enum(["deposit", "debit"]);

export const zTransaction = z.object({
  id: z.string(),
  amount: z.number(),
  description: z.string(),
  type: zTransactionType,
  beneficiary: z.string(),
  bankAccountId: z.string(),
  userId: z.string(),
});

export type ITransaction = z.infer<typeof zTransaction>;
