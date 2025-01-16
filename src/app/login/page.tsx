"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.svg";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="app-container w-full flex-1 flex flex-col p-6 justify-center gap-6 ">
        <div className="flex flex-col items-center justify-center mb-14 gap-4">
          <div className="flex justify-center">
            <Image className="w-[36px] h-[22px] " src={logo} alt="" />
          </div>
          <h1 className="font-bold text-3xl">Bem vindo</h1>
          <p className="text-zinc-600 text-sm">Faça Login para começar</p>
        </div>

        <div>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" />
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="email">Senha</Label>
              <Input id="password" />
            </div>
            <Button className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>

        <p className="flex justify-center text-zinc-600 hover:text-zinc-900">
          Cadastre-se
        </p>
      </div>
    </>
  );
}
