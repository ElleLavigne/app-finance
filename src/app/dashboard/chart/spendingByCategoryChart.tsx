"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const chartData = [
  { category: "home", spent: 250, fill: "var(--color-home)" },
  { category: "fun", spent: 200, fill: "var(--color-fun)" },
  { category: "emergency", spent: 187, fill: "var(--color-emergency)" },
  { category: "health", spent: 173, fill: "var(--color-health)" },
  { category: "creditCard", spent: 90, fill: "var(--color-creditCard)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  home: {
    label: "Casa",
    color: "hsl(var(--chart-1))",
  },
  fun: {
    label: "Diversão",
    color: "hsl(var(--chart-2))",
  },
  emergency: {
    label: "Emergência",
    color: "hsl(var(--chart-3))",
  },
  health: {
    label: "Saúde",
    color: "hsl(var(--chart-4))",
  },
  creditCard: {
    label: "Cartão de crédito",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function SependingByCategorySummary() {
  return (
    <div className="flex flex-col gap-4 ">
    <p className="font-medium text-foreground ">
    Resumo de gasto por categoria
  </p>
    <Card className="flex flex-col ">
      <CardHeader className="items-center pb-0">
        <CardTitle>Gastos por categoria</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="spent" />
            <ChartLegend
              content={<ChartLegendContent nameKey="category" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
    </div>
  )
}
