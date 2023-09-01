"use client";

import { useEffect, useState } from "react";

export const useToken = () => {
  const [token, setToken] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token") || null;
    }
  });

  useEffect(() => {
    setToken(() => {
      token && localStorage.setItem("token", token);
      return token;
    });
  }, [token]);

  return { token, setToken };
};
