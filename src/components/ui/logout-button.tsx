import { SignOut } from "phosphor-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebase/config";

export function LogoutButton() {
    const router = useRouter();
    const handleLogout = async () => {
      try {
        await signOut(firebaseAuth);
        console.log("Usuário deslogado com sucesso!");
        router.push("/login"); // Redireciona para a página de login
      } catch (error) {
        console.error("Erro ao deslogar:", error);
      }
    };
  return (
    <>
      <Button 
      variant="outline" 
      size="icon" 
      type="button" 
      onClick={handleLogout}>
        <SignOut weight="fill" color="#a50b0bed" />
      </Button>
    </>
  );
}
