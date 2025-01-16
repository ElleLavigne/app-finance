"use client";

import { checkDateGreeting } from "@/utils/checkDateGreeting";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { NavigationMenu } from "./navMenu";
import { Separator } from "./ui/separator";
import { ThemeProvider } from "./theme/themeProvider";
import { ThemeToggleProvider } from "./theme/themeToggleProvider";

export function Header() {
  const currentDate = new Date();
  return (
    <header className="flex flex-col p-6">
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <h3 className="font-medium text-foreground  text-[1rem]">
            Nome da conta
          </h3>
          <p className="font-medium text-muted-foreground  text-[0.75rem]">
            {checkDateGreeting(currentDate)} {currentDate.toLocaleDateString()}
          </p>
        </div>

        <Separator orientation="vertical" className="ml-4 h-10" />

        <div className="flex items-center">
          <NavigationMenu />
        </div>
        <div className="ml-auto">
          <ThemeToggleProvider />
        </div>
      </div>
      <Separator className="mt-4" />
    </header>
  );
}
