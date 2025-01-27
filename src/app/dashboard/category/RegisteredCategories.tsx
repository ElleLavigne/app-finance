"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { firebaseList } from "@/lib/firebase/firebaseList";
import { zFirebaseCollection } from "@/lib/firebase/@types/collections";
import { ICategory } from "@/schemas/categories/categories";

export function RegisteredCategories() {
  const [list, setList] = useState<ICategory[]>([]); //armazenando a lista no estado

  async function handleFirebaseList() {
    console.log('buscando dado')
    const newList = await firebaseList<ICategory>({
      collection: zFirebaseCollection.Enum.categories,
    });
    setList(newList);
  }
  useEffect(() => {
    handleFirebaseList();
  }, []);

  return (
    <>
      <Table>
        <TableCaption>Categoria já registrada.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nome</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Cor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.color}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
