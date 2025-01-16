"use client";

import { OutputSummaryCard } from "@/components/outputSummaryCard";
import { SependingByCategorySummary } from "./chart/spendingByCategoryChart";
import { SavingdGolsSummary } from "./chart/savingsGoalsSummary";

import { IncomeSummaryCard } from "@/components/incomeSummaryCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col pl-10 pr-10 gap-11">
        <div className="flex justify-between">
          <p className="text-4xl text-foreground font-semibold">Resumo Geral</p>
          <DropdownMenu>
            <DropdownMenuTrigger className="">
              Filtro por data
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <Calendar />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <OutputSummaryCard />
          <IncomeSummaryCard />
        </div>

        <div className="grid grid-cols-4 gap-4 ">
          <SependingByCategorySummary />
          <SavingdGolsSummary />
        </div>
      </div>
    </>
  );
}
