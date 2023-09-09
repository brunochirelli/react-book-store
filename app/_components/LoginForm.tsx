"use client";

import React, { useState } from "react";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { useToken } from "@/hooks/useToken";
import { userService } from "@/app/_services/user.service";
import { LoginUserType } from "@/types/user.types";

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { token, setToken } = useToken();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<LoginUserType>();

  const onSubmit = async ({ username, password }: LoginUserType) => {
    try {
      const response = await userService.login(username, password);

      if (response.token) {
        toast("Welcome!");
        reset();
        return setToken(response.token);
      }
      toast("Ops... Something went wrong");
    } catch (error: any) {}
  };

  if (token) redirect("/");

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block" htmlFor="email">
            E-mail
          </label>
          <input
            {...register("username", { required: true })}
            className="border"
            type="email"
            placeholder="E-mail"
            id="email"
          />
          {errors.username && (
            <small className="block text-red-500">
              {errors.username.message}
            </small>
          )}
        </div>

        <div>
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            {...register("password", { required: true })}
            className="border"
            type={isPasswordVisible ? "text" : "password"}
            id="password"
          />
          <button
            className="w-5"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
          </button>
        </div>
        {errors.username && (
          <small className="block text-red-500">
            {errors.username.message}
          </small>
        )}

        <div>
          <button
            className="my-2 py-1 block border w-full rounded disabled:bg-slate-200"
            type="submit"
            disabled={!isValid}
          >
            Login
          </button>
          <small>This is a demo site. Do not use real credentials.</small>
        </div>
      </form>
      <section>
        <small>
          New user? <Link href="/register">Create a new account</Link>
        </small>
      </section>
    </>
  );
};

export default LoginForm;
