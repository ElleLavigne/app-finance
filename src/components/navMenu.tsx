"use client"

import Link from "next/link";

import { LinkNavigation } from "./linkNavigation";
import { ChartPieSlice, Coins, Cube, Gear, SquaresFour } from "phosphor-react";

export function NavigationMenu() {
  return (
   <div className="flex gap-4 items-center justify-center ">

      <LinkNavigation link="/dashboard">
        <SquaresFour />
        Resumo
      </LinkNavigation> 

      <LinkNavigation link="dashboard/chart">
        <ChartPieSlice/>
        Gráfico
      </LinkNavigation> 

      <LinkNavigation link="dashboard/goals">
        <Coins/>
        Metas
      </LinkNavigation> 
      <LinkNavigation link="dashboard/category">
        <Cube/>
        Categorias
      </LinkNavigation> 
      <LinkNavigation link="">
        <Gear/>
        Configuração
      </LinkNavigation> 
      </div>
   
  );
}
