import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      invoice: "Nubank",
      paymentStatus: "Pago",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "Inter",
      paymentStatus: "Recebido",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },

  ]
  
  export function ListTransactionPerformed() {
    return (
      <Table>
        <TableCaption>Uma lista de suas transações recentes.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Banco</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Descrição</TableHead>
            {/* <TableHead>Tipo de transação</TableHead> */}
            {/* <TableHead>Beneficiário</TableHead> */}
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  
