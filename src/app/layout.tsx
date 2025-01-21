import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../index.css";
import { ThemeProvider } from "@/components/theme/themeProvider";
import { AuthContextProvider } from "@/contexts/AuthContext";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safe Money",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`flex flex-col h-[100vh] bg-background  ${inter.className} antialiased`}
      >
        <AuthContextProvider>
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
