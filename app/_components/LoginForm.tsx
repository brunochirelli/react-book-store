"use client";

import React, { useEffect, useState } from "react";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import { userService } from "@/services/user.service";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [hasError, setHasError] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userService.login(username, password);
  };

  useEffect(() => {
    if (username && password) {
      setHasError(false);
    }
  }, [username, password]);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          E-mail
          <input
            className="outline"
            type="text"
            name="email"
            placeholder="E-mail"
            id="email"
            onChange={({ target }) => setUsername(target.value)}
          />
        </label>
        <label>
          Password
          <input
            className="outline"
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            id="password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <button
            className="w-5"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
          </button>
        </label>
        <button
          className="px-2 py-1 disabled:bg-slate-300"
          type="submit"
          disabled={hasError}
        >
          Login
        </button>
        {/* Disclaimer message */}
        <small>This is a demo site. Do not use real credentials.</small>
      </form>
      <section>
        <p>New user?</p>
        <Link href="/register">Create a new account</Link>
      </section>
    </>
  );
};

export default LoginForm;
