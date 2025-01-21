
"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", income: 186, outcome: 80 },
  { month: "February", income: 305, outcome: 200 },
  { month: "March", income: 237, outcome: 120 },
  { month: "April", income: 73, outcome: 190 },
  { month: "May", income: 209, outcome: 130 },
  { month: "June", income: 214, outcome: 140 },
]

const chartConfig = {
  income: {
    label: "Entradas",
    color: "hsl(var(--chart-1))",
  },
  outcome: {
    label: "Saídas",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ExpenseAndIncomeSummary() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Entradas e Saídas</CardTitle>
        <CardDescription>Resumo da movimentação</CardDescription>
      </CardHeader>
      <CardContent className="">
        <ChartContainer className="" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip      
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="income" fill="var(--color-income)" radius={4} />
            <Bar dataKey="outcome" fill="var(--color-outcome)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
     
    </Card>
  )
}
