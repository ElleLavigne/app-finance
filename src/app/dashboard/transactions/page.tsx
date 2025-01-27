"use client"

import { Separator } from "@/components/ui/separator"
import { ListTransactionPerformed } from "./listTransactionsPerformed"
import { TransactionRegisterForm } from "./transactionRegisterForm"

export default function Transactions(){
    return(
        <>
        <div className="flex flex-col p-8 gap-6">
       <h1 className="text-4xl text-foreground font-semibold">Suas transações</h1>
       <ListTransactionPerformed/>
       <Separator/>
       <div className="flex flex-col gap-6">
        <p className="font-medium text-lg">Adicione uma nova transação</p>
       <TransactionRegisterForm/>
       </div>

        </div>
        </>
    )
}