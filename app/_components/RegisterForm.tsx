"use client";

import React, { useState } from "react";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { userService } from "@/services/user.service";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userService.register({ fullName, password, confirmPassword, email });
  };

  return (
    <>
      <div>
        <h1 className="text-3xl mb-3">Create account</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="block font-bold" htmlFor="full-name">
              Name
            </label>
            <input
              className="font-normal"
              type="text"
              name="email"
              placeholder="Full name"
              id="full-name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label className="block" htmlFor="email">
              E-mail
            </label>
            <input
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block" htmlFor="password">
              Password
            </label>
            <div className="flex">
              <input
                name="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="At least 6 characters"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={togglePasswordVisibility}>
                {isPasswordVisible ? (
                  <EyeSlashIcon className="w-5" />
                ) : (
                  <EyeIcon className="w-5" />
                )}
              </button>
            </div>
            <small className="flex">
              <InformationCircleIcon className="w-5" />
              As senhas devem ter pelo menos 6 caracteres.
            </small>
          </div>

          <div>
            <label className="block">Confirm Password</label>
            <div className="flex">
              <input
                name="confirmPassword"
                type={isPasswordVisible ? "text" : "password"}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className="w-5" onClick={togglePasswordVisibility}>
                {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          <button className="py-1 block border w-full rounded" type="submit">
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
