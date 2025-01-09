"use client"

import Link from "next/link";

import { LinkNavigation } from "./linkNavigation";
import { ChartPieSlice, Coins, House } from "phosphor-react";

export function NavigationMenu() {
  return (
   <div className="flex gap-4 items-center justify-center p-8">

      <LinkNavigation link="/">
        <House />
        Início
      </LinkNavigation> 

      <LinkNavigation link="chart">
        <ChartPieSlice/>
        Gráfico
      </LinkNavigation> 

      <LinkNavigation link="gols">
        <Coins/>
        Metas
      </LinkNavigation> 
      </div>
   
  );
}
