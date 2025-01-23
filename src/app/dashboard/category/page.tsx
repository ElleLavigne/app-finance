import { SependingByCategorySummary } from "../chart/spendingByCategoryChart";
import { CategoryRegistrationForm } from "./categoryRegistrationForm";



export default function Category() {
  return (
    <>
      <div className="p-8  flex flex-col gap-8">
        {/* <h2 className="text-xl font-semibold">Cadastro de categorias</h2> */}
        <div className="">
        <SependingByCategorySummary/>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-semibold text-foreground">Adicione uma categoria</p>
        <CategoryRegistrationForm/>
        </div>
      </div>
      
    </>
  );
}
