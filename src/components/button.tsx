"use client"
import { ReactNode } from "react";

type IButtonProps = {
    children: ReactNode
}


export function Button({ children }: IButtonProps) {
  return (
    <>
      <button className="min-w-64 border border-red-500">{children}</button>
    </>
  );
}
