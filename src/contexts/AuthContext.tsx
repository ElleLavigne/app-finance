"use client";

import { UserCredential } from "firebase/auth";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type IProps = {
  children: ReactNode;
};
type IAuthProvider = {
  credential: UserCredential | undefined;
  setCredential: Dispatch<SetStateAction<UserCredential | undefined>>;
};

const authContext = createContext<IAuthProvider>({} as IAuthProvider);
export function AuthContextProvider({ children }: IProps) {
  const [credential, setCredential] = useState<UserCredential | undefined>(
    undefined
  );

  return (
    <>
      <authContext.Provider
        value={{
          credential,
          setCredential,
        }}
      >
        {children}
      </authContext.Provider>
    </>
  );
}
 export function useAuth(){
    const context = useContext(authContext)
    return context
 }