"use client";

import { OutputSummaryCard } from "@/components/outputSummaryCard";
import { SependingByCategorySummary } from "./chart/spendingByCategoryChart";
import { SavingdGolsSummary } from "./chart/savingsGoalsSummary";

import { IncomeSummaryCard } from "@/components/incomeSummaryCard";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { DatePickerWithRange } from "@/components/date-picker-with-range";

export default function Home() {
  return (
    <>
      <div className="flex flex-col pl-10 pr-10 gap-11">
        <div className="flex ">
          <p className="text-4xl text-foreground font-semibold">Resumo Geral</p>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="py-2 px-4 border rounded-xl ml-auto">
              Filtro por data
            </DropdownMenuTrigger>
            <DropdownMenuContent className="">
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DatePickerWithRange/>
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
