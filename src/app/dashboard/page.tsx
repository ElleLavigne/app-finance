"use client";

import { OutputSummaryCard } from "@/components/outputSummaryCard";

import { IncomeSummaryCard } from "@/components/incomeSummaryCard";

import { DatePickerWithRange } from "@/components/date-picker-with-range";
import { Button } from "@/components/ui/button";
import { ExpenseAndIncomeSummary } from "./chart/expenseAndIncomeSummary";

export default function Home() {
  return (
    <>
      <div className="flex flex-col pl-10 pr-10 gap-11">
        <div className="flex items-center gap-4">
          <p className="text-4xl text-foreground font-semibold">Resumo Geral</p>
          <DatePickerWithRange className="ml-auto" />
          <Button className="" type="button">
            filtrar
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <OutputSummaryCard />
          <IncomeSummaryCard />
        </div>

        <div className="grid grid-cols-3 gap-4 ">
          <ExpenseAndIncomeSummary />
        </div>
      </div>
    </>
  );
}
