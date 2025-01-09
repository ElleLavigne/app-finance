"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { House } from "phosphor-react";
import { ReactNode } from "react";
type IProps = {
  children: ReactNode;
  link: string;
};

export function LinkNavigation(props: IProps) {
  const { children, link } = props;
  const path = usePathname()

  return (
    <Link
      data-current={path === props.link}
      className="w-min p-2 flex gap-2 items-center font-medium text-zinc-400 bg-zinc-50 border rounded-full stroke-zinc-100 leading-none data-[current=true]:text-zinc-800"
      href={link}
    >
      {children}
    </Link>
  );
}
