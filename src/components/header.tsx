"use client";

import { checkDateGreeting } from "@/utils/checkDateGreeting";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { NavigationMenu } from "./navMenu";
import { Separator } from "./ui/separator";
import { ThemeProvider } from "./theme/themeProvider";
import { ThemeToggleProvider } from "./theme/themeToggleProvider";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { LogoutButton } from "./ui/logout-button";

export function Header() {
  const { currentUser } = useAuth();

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
            {currentUser?.displayName}
          </h3>
          <p className="font-medium text-muted-foreground  text-[0.75rem]">
            {checkDateGreeting(currentDate)} {currentDate.toLocaleDateString()}
          </p>
        </div>

        <Separator orientation="vertical" className="ml-4 h-10" />

        <div className="flex items-center">
          <NavigationMenu />
        </div>
        <div className="flex gap-4 ml-auto">
          <ThemeToggleProvider />
          <LogoutButton/>
        </div>
      </div>
      <Separator className="mt-4" />
    </header>
  );
}
