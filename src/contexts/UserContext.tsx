
import React, { createContext, useState, useContext, ReactNode } from "react";

type UserRole = "jobseeker" | "recruiter" | "admin" | null;

interface UserContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <UserContext.Provider
      value={{
        userRole,
        setUserRole,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
