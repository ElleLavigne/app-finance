"use client";
import { Header } from "@/components/header";
import { useAuth } from "@/contexts/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser && (
        <>
          <Header />

          {children}
        </>
      )}
      {!currentUser &&(
        <>
       
        </>
      )}
    </div>
  );
}
