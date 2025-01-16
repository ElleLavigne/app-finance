"use client"

import { CurrencyDollar } from "phosphor-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export function IncomeSummaryCard(){
    return(
        <Card>
        <CardHeader>
          <CardTitle className="flex gap-2 font-normal">
            <CurrencyDollar color="#125f12" />
            Entradas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-800 font-semibold text-2xl">R$2.000,00</p>
        </CardContent>
      </Card>
    )
}