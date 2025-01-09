import Link from "next/link";
import { House } from "phosphor-react";
import { ReactNode } from "react";
type IProps ={
    children: ReactNode;
    link: string
}

export function LinkNavigation(props: IProps){
    const {children, link} = props
    

    return(
        <Link
        className="w-min p-2 flex gap-2 items-center bg-zinc-50 border rounded-full stroke-zinc-100 leading-none"
        href={link}
      >
        {children}
      </Link>
    )
}