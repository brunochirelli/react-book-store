import React from "react";

import { Metadata } from "next";

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HomeLayout;