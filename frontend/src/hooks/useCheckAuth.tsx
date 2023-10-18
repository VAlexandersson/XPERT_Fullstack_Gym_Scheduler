import { useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import useAuth  from "./useAuth"

const useCheckAuth = () => {
  const { setUser } = useAuth();

  useEffect(() => {
    fetch("http://localhost:4001/auth/check", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.authenticated) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      })
      .catch((error) => {
        console.error("Error checking authentication:", error);
        setUser(null);
      });
  }, [setUser]);

  return;
};

export default useCheckAuth;
