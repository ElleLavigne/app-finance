"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createTransaction } from "@/lib/firebase/transactions/createTransaction";
import { ITransaction, zTransaction } from "@/schemas/transactions/transactions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

export function TransactionRegisterForm() {
  const { register, handleSubmit, setValue } = useForm<ITransaction>({
    defaultValues: {
      type: "debit",
    },
    resolver: zodResolver(zTransaction)
  });

  async function handleCreateTransaction(data: ITransaction) {
    console.log("Data", data);
    // await createTransaction({
    //   data: data,
    // });
    // window.alert("Cadastrado");
  }

  return (
    <>
      <div className=" ">
        <form
          onSubmit={handleSubmit(handleCreateTransaction)}
          className="flex gap-6 items-end"
        >
          <div>
            <Label>Banco</Label>
            <Input
              id="account"
              required
              title="Por favor, insira a instituição bancária"
              {...register("bankAccountId")}
            />
          </div>
          <div>
            <Label>Tipo de transação</Label>
            <Select
              onValueChange={(value) => {
                // @ts-ignore
                setValue("type", value);
              }}
              {...register("type")}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Débito" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="debit">Débito</SelectItem>
                <SelectItem value="deposit">Depósito</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Beneficiário</Label>
            <Input id="beneficiary" {...register("beneficiary")} />
          </div>
          <div>
            <Label>Descrição</Label>
            <Input id="description" {...register("description")} />
          </div>

          <div>
            <Label>Valor</Label>
            <Input
              id="amount"
              type="number"
              required
              title="Por favor, insira o valor da transação"
              {...register("amount")}
            />
          </div>
          <Button type="submit">Enviar transação</Button>
        </form>
      </div>
    </>
  );
}
