"use client";

import { firebaseAuth } from "@/lib/firebase/config";
import { User, UserCredential } from "firebase/auth";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type IProps = {
  children: ReactNode;
};
type IAuthProvider = {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
};

const authContext = createContext<IAuthProvider>({} as IAuthProvider);
export function AuthContextProvider({ children }: IProps) {
  const [credential, setCredential] = useState<UserCredential | undefined>(
    undefined
  );
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <>
      <authContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        {children}
      </authContext.Provider>
    </>
  );
}
export function useAuth() {
  const context = useContext(authContext);
  return context;
}
