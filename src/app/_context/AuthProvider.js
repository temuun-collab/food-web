"use client";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  const getUser = async (token) => {
    try {
      const rawData = await fetch("http://localhost:8000/users/me", {
        method: "GET",
        headers: {
          authorization: token,
        },
      });
      const data = await rawData.json();
      console.log(data, "kk");

      // setUser(data.user);
      // setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        getUser(token);
        console.log(token, "lll");

        return setToken(token);
      }
      return setToken("no token");
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

// 1. Context create
// 2. Context Provider create
// 3. Provider => layout
// 4. token avah, me endpoint
// 5. Page deeree Context ashiglasan
