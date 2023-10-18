import React, { createContext, useState, useEffect } from "react";

type User = {
  ID: string;
  password: string;
  Role_ID: string;
};

export type AuthContextType = {
  user: User | null;
  auth: boolean;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const savedUser = localStorage.getItem("user");
  const initialUser: User | null = savedUser ? JSON.parse(savedUser) : null;
    const [user, setUser] = useState<User | null>(initialUser);

    useEffect(() => {
      fetch("http://localhost:4001/auth/check", {
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.authenticated) {
            const user = { ID: data.ID, password: data.password, Role_ID: data.Role_ID };
            setUser(user);
          }
          else {
            logout();
          }
        });
    }, []);


    const login = (user: User) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    const auth = Boolean(user);

       return (
        <AuthContext.Provider value={{ user, auth, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
