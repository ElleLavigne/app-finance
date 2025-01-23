"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { signInWithGoogle } from "@/lib/firebase/signInWithGoogle";
import { useAuth } from "@/contexts/AuthContext";
import { GoogleLogo } from "phosphor-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Exemplos de falsy: qualquer coisa que é undefined, null e 0.
// Qualquer coisa difrente de um falsy é truthy.

export default function Login() {
  const router = useRouter();
  const { currentUser } = useAuth();
  useEffect(() => {
    if (currentUser) {
      router.push("/dashboard");
    }
  }, [currentUser]);

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
          <p>user:{currentUser?.displayName}</p>
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
            <Button
              className="w-full bg-slate-50 text-zinc-800 stroke-zinc-600 hover:bg-slate-300"
              type="button"
              onClick={async () => {
                await signInWithGoogle();
              }}
            >
              <GoogleLogo color="#27272a" />
              Entrar com o google
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
