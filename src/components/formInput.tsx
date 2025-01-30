import { UseFormReturn } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type ISelectOption = {
  label: string;
  value: string;
};

type IProps = {
  form: UseFormReturn<any, any, undefined>;
  label: string;
  description?: string;
  required?: boolean;
  title?: string;
  name: string;
  inputType?: "input" | "select";
  selectOptions?: ISelectOption[];
  placeholder?: string;
};

export function FormInput({
  form,
  label,
  name,
  description,
  required,
  title,
  selectOptions,
  inputType = "input",
  placeholder,
}: IProps) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>

            {inputType === "input" && (
              <FormControl>
                <Input
                  required={required}
                  title={title}
                  placeholder={placeholder}
                  {...field}
                />
              </FormControl>
            )}
            {inputType === "select" && (
              <FormControl>
                <Select required={required} {...field}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {selectOptions?.map((data) => {
                      return (
                        <SelectItem key={data.value} value={data.value}>
                          {data.label}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </FormControl>
            )}

            <FormDescription>{description}</FormDescription>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
