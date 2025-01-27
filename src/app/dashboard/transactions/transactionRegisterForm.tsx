"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function TransactionRegisterForm() {
  return (
    <>
      <div className=" ">
        <form className="flex gap-6 items-end">
          <div>
            <Label>Banco</Label>
            <Input
              id="account"
              required
              title="Por favor, insira a instituição bancária"
            />
          </div>
          <div>
            <Label>Tipo de transação</Label>
            <Input
              id="type"
              required
              title="Por favor, insira o tipo de transação"
            />
          </div>

          <div>
            <Label>Beneficiário</Label>
            <Input id="beneficiary" />
          </div>
          <div>
            <Label>Descrição</Label>
            <Input id="description" />
          </div>

          <div>
            <Label>Valor</Label>
            <Input
              id="amount"
              type="number"
              required
              title="Por favor, insira o valor da transação"
            />
          </div>
          <Button type="button">Enviar transação</Button>
        </form>
      </div>
    </>
  );
}
