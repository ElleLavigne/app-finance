"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import {
  ICreateTransaction,
  zCreateTransaction,
} from "@/schemas/transactions/transactions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/formInput";

export function TransactionRegisterForm() {
  const form = useForm<ICreateTransaction>({
    defaultValues: {
      type: "debit",
      amount: 0,
      bankAccountId: "",
      beneficiary: "",
      description: "",
    },
    resolver: zodResolver(zCreateTransaction),
  });

  async function handleCreateTransaction(data: ICreateTransaction) {
    console.log("Data", data);
    // await zCreateTransaction({
    //   data: data,
    // });
    // window.alert("Cadastrado");
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleCreateTransaction)}
          className="flex gap-6 items-end"
        >
          <FormInput
            form={form}
            label="Banco"
            name="bankAccountId"
            required
            title="Por favor, insira a instituição bancária"
          ></FormInput>

          <Button type="submit">Enviar transação</Button>
        </form>
      </Form>
    </>
  );
}
