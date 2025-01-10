"use client";

import { BalanceSummaryCard } from "@/components/balanceSummaryCard";
import { SependingByCategorySummary } from "./chart/spendingByCategoryChart";
import { SavingdGolsSummary } from "./chart/savingsGoalsSummary";

export default function Home() {
  return (
    <>
      <div className="flex flex-col p-4 gap-11">
        <div className="flex flex-col gap-4">
          <p className="font-medium text-zinc-600">Resumo da movimentação</p>
          <BalanceSummaryCard />
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-zinc-600">
            Resumo de gasto por categoria
          </p>

          <SependingByCategorySummary />
        </div>

        <div className="flex flex-col gap-4">
          <p className="font-medium text-zinc-600">Resumo geral da sua meta</p>
        <SavingdGolsSummary/>
        </div>
      </div>
    </>
  );
}
