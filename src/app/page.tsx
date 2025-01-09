"use client"

import { Header } from "@/components/header";
import { NavigationMenu } from "@/components/navMenu";

export default function Home() {
  return(
    <>
      <div className="flex flex-col p-6">
          <Header />
        <NavigationMenu/>
        </div>
    </>
  )
}
