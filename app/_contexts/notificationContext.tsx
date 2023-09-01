"use client";

import React, { createContext, useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const NotificationContext = createContext<null>(null);

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <NotificationContext.Provider value={null}>
      {children}
      {isClient && <ToastContainer />}
    </NotificationContext.Provider>
  );
};
