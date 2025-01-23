"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { firebaseCreate } from "@/lib/firebase/firebaseCreate";
import { ICategory } from "@/schemas/categories/categories";
import {useForm} from 'react-hook-form'

const category: ICategory = {
  id: '1',
  name: 'Mercado',
  description: 'Gasto fixo do mercado',
  color: '#20b42c'
}

export function CategoryRegistrationForm() {
  const form = useForm({
      defaultValues: {},
       

  })
  return (
    <div>
      <form className="flex gap-4 items-end ">
        <div className="flex flex-col gap-2">
          <Label>Título</Label>
          <Input id="title" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Descrição</Label>
          <Input id="description" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Cor</Label>
          <Input className="border rounded-full" type="color" id="color" />
        </div>
        <Button
          type="button"
          onClick={() => {
            firebaseCreate({
              id: category.id,
              collection: "categories",
              data: category
              
            });
          }}
        >
          Cadastrar
        </Button>
      </form>
    </div>
  );
}
