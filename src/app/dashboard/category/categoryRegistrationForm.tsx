"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createCategory } from "@/lib/firebase/categories/createCategory";

import { ICategory } from "@/schemas/categories/categories";
import { useForm } from "react-hook-form";



export function CategoryRegistrationForm() {
  const { register, handleSubmit } = useForm<ICategory>();

  async function handleCreateCategory(data: ICategory) {

  await  createCategory({
   data: data
    }); 
    window.alert('Cadastrado')
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleCreateCategory)}
        className="flex gap-4 items-end "
      >
        <div className="flex flex-col gap-2">
          <Label>Título</Label>
          <Input id="title" {...register("name")} />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Descrição</Label>
          <Input id="description" {...register("description")} />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Cor</Label>
          <Input
            className="border rounded-full"
            type="color"
            id="color"
            {...register("color")}
          />
        </div>
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
}
