import { SependingByCategorySummary } from "../chart/spendingByCategoryChart";

import { CategoryRegistrationForm } from "./categoryRegistrationForm";
import { RegisteredCategories } from "./RegisteredCategories";

export default function Category() {
  return (
    <>
      <div className="p-8  flex flex-col gap-8">

        <div className="">
          <SependingByCategorySummary />
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-semibold text-foreground">
            Adicione uma categoria
          </p>
          <CategoryRegistrationForm />
        </div>
        <RegisteredCategories />
      </div>
    </>
  );
}
