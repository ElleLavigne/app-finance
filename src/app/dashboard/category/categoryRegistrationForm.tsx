import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CategoryRegistrationForm() {
  return (
    <div>
      <form className="flex gap-4 items-end ">
        <div className="flex flex-col gap-2">
        <Label>Título</Label>
        <Input id="title"/>
        </div>
        <div className="flex flex-col gap-2">
        <Label>Descrição</Label>
        <Input id="description"/>
        </div>
        <div className="flex flex-col gap-2">
        <Label>Cor</Label>
        <Input
        className="border rounded-full"
        type="color"
        id="color"/>
        </div>
        <Button
        type="submit"
        >
            Cadastrar
        </Button>
      </form>
    </div>
  );
}
