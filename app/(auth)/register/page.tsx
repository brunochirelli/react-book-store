import React, { Suspense } from "react";

import { cookies } from "next/headers";

import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        }
      >
        <RegisterForm />
      </Suspense>
    </>
  );
};

export default RegisterPage;
