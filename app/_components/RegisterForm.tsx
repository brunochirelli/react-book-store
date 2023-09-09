"use client";

import React, { useState } from "react";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

import { userService } from "@/app/_services/user.service";
import { RegisterUserType } from "@/types/user.types";

const RegisterForm = ({ token, setToken }: { token?: any; setToken?: any }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<RegisterUserType>({
    defaultValues: {
      fullName: "Bruno",
      email: "br@ksajd.com",
      password: "123456",
      confirmPassword: "123456",
    },
  });

  const password = watch("password");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSubmit = async ({
    fullName,
    password,
    confirmPassword,
    email,
  }: RegisterUserType) => {
    try {
      const response = await userService.register({
        fullName,
        password,
        confirmPassword,
        email,
      });

      const newToken = response.token + `${Date.now()}`;

      setToken(newToken);

      reset();
      return response;
    } catch (error: any) {
      const errorViolation = JSON.parse(
        error.response.headers["sl-violations"]
      )[0];
      errorViolation.message;
    }
  };

  if (token) return redirect("/");

  return (
    <>
      <div>
        <h1 className="text-3xl mb-3">Create account</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block font-bold" htmlFor="full-name">
              Name
            </label>
            <input
              {...register("fullName", {
                required: { value: true, message: "Name is required" },
              })}
              className="font-normal"
              type="text"
              placeholder="Full name"
              id="full-name"
            />
            {errors.fullName && (
              <small className="block text-red-500">
                {errors.fullName.message}
              </small>
            )}
          </div>

          <div>
            <label className="block" htmlFor="email">
              E-mail
            </label>
            <input
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
              type="email"
            />
            {errors.email && (
              <small className="block text-red-500">
                {errors.email.message}
              </small>
            )}
          </div>

          <div>
            <label className="block" htmlFor="password">
              Password
            </label>
            <div className="flex">
              <input
                {...register("password", {
                  required: { value: true, message: "Password is required" },
                  minLength: 6,
                })}
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="At least 6 characters"
                id="password"
              />
              <div onClick={togglePasswordVisibility}>
                {isPasswordVisible ? (
                  <EyeSlashIcon className="w-5" />
                ) : (
                  <EyeIcon className="w-5" />
                )}
              </div>
            </div>
            <small className="flex">
              <InformationCircleIcon className="w-5" />
              As senhas devem ter pelo menos 6 caracteres.
            </small>
            {errors.password && (
              <small className="block text-red-500">
                {errors.password.message}
                {errors.password.type === "minLength" &&
                  "Password should have at least 6 characters"}
              </small>
            )}
          </div>

          <div>
            <label className="block">Confirm Password</label>
            <div className="flex">
              <input
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "Password confirmation is required",
                  },
                  minLength: 6,
                  validate: (value) => {
                    return value === password;
                  },
                })}
                name="confirmPassword"
                type={isPasswordVisible ? "text" : "password"}
              />
              <div className="w-5" onClick={togglePasswordVisibility}>
                {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
              </div>
            </div>
            {errors.confirmPassword && (
              <small className="block text-red-500">
                {errors.confirmPassword.message}
                {errors.confirmPassword.type === "validate" &&
                  "Password didn't match"}
                {errors.confirmPassword.type === "minLength" &&
                  "Password should have at least 6 characters"}
              </small>
            )}
          </div>

          <button
            className="py-1 block border w-full rounded"
            type="submit"
            // disabled={!isValid}
          >
            Register
          </button>

          <small>Demo site. Do not use real credentials.</small>
        </form>

        <div>
          <small>
            Already have an account? <Link href="/login">Login</Link>
          </small>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
