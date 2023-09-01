"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { UserType } from "@/types/user.types";

type UserContextType = {
  user: UserType;
  setUser?: Dispatch<SetStateAction<UserType>>;
};

const initialData: UserContextType = {
  user: {
    id: "",
    fullName: "",
    email: "",
  },
};

const UserContext = createContext<UserContextType>(initialData);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>(initialData.user);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export { UserProvider, useUser };
