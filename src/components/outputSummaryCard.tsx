"use client";

import { CurrencyDollar } from "phosphor-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

export function OutputSummaryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 font-normal text-foreground justify-between">
          Saídas
          <CurrencyDollar color="#99260f" />
        </CardTitle>
        <CardDescription>
          
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-red-600 font-semibold text-2xl dark:text-red-800">R$2.000,00</p>
      </CardContent>
    </Card>
  );
}
