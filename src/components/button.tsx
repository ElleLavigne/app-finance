"use client"
import { createUserExample } from "@/app/utils/exemplo";
import { ReactNode } from "react";

type IButtonProps = {
    children: ReactNode
}


export function Button({ children }: IButtonProps) {
  return (
    <>
      <button
      onClick={() => {
        createUserExample()
      }}
       className="min-w-64 border border-red-500">{children}</button>
    </>
  );
}
