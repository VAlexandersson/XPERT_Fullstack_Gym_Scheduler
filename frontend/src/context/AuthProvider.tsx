import React, { createContext, useState } from "react";

type User = {
  ID: string;
  password: string;
  Role_ID: string;
};

export type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  auth: boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const auth = Boolean(user);

    const logout = () => {
        setUser(null);
    };
    
    return (
        <AuthContext.Provider value={{ auth, user, setUser, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
