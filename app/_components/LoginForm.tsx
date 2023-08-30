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
        <div>
          <label className="block" htmlFor="email">
            E-mail
          </label>
          <input
            className="border"
            type="text"
            name="email"
            placeholder="E-mail"
            id="email"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>

        <div>
          <label className="block">Password</label>
          <input
            className="border"
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
        </div>

        <div>
          <button
            className="block px-2 py-1 disabled:bg-slate-300"
            type="submit"
            disabled={hasError}
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
