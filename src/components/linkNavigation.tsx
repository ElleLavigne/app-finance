"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { ReactNode } from "react";
type IProps = {
  children: ReactNode;
  link: string;
};

export function LinkNavigation(props: IProps) {
  const { children, link } = props;
  const path = usePathname();

  return (
    <Link
      data-current={path === props.link}
      className="w-min flex gap-2 items-center font-medium text-zinc-400 data-[current=true]:text-zinc-800"
      href={link}
    >
      {children}
    </Link>
  );
}
