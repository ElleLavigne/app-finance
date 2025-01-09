"use client";

import { CurrencyDollar } from "phosphor-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function BalanceSummaryCard() {
  return (
    <div>
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex gap-2 font-normal">
          <CurrencyDollar color="#D13415" />
          Saídas
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-red-600 font-semibold text-2xl">R$2.000,00</p>
      </CardContent>
    </Card>
    </div>
  );
}

