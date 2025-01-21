"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const chartData = [
  { date: "2024-04-01", home: 222, market: 150, health: 150 },
  { date: "2024-04-02", home: 97, market: 180, health: 60 },
  { date: "2024-04-03", home: 167, market: 120, health: 40},
  { date: "2024-04-04", home: 242, market: 260, health: 50},
  { date: "2024-04-05", home: 373, market: 290, health: 20},
  { date: "2024-04-06", home: 301, market: 340, health: 200},
  { date: "2024-04-07", home: 245, market: 180, health: 18},
  { date: "2024-04-08", home: 409, market: 320, health: 150},
  

  
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  home: {
    label: "Casa",
    color: "hsl(var(--chart-1))",
  },
  market: {
    label: "Mercado",
    color: "hsl(var(--chart-2))",
  },
  health: {
    label: "Saúde",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function SependingByCategorySummary() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Gastos por categoria</CardTitle>
          <CardDescription>
            Visualize seus gastos por categoria
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Últimos 3 meses
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
            Último mês

            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Últimos 7 dias
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillHome" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-home)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-home)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMarket" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-market)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-market)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillHealth" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-health)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-health)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("pt-BR", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="market"
              type="natural"
              fill="url(#fillMarket)"
              stroke="var(--color-market)"
              stackId="a"
            />
            <Area
              dataKey="home"
              type="natural"
              fill="url(#fillHome)"
              stroke="var(--color-home)"
              stackId="a"
            />
            <Area
              dataKey="health"
              type="natural"
              fill="url(#fillHealth)"
              stroke="var(--color-health)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
