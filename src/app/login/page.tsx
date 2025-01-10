"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <>
      <div className="app-container w-full flex-1 flex flex-col p-6 justify-center gap-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl">Bem vindo</h1>
          <p className="text-muted-foreground">Faça Login para começar</p>
        </div>

        <div>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" />
            </div>
            <Button className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
