import { BASE_URL } from ".";
import { handleResponse } from "../handleResponse";
import { RegisterUserType } from "@/types/user.types";

const login = async (email: string, password: string) => {
  const url = `${BASE_URL}/auth/login`;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };
  const response = await fetch(url, requestOptions);

  const user = await handleResponse(response);
  return user;
};

const register = async (user: RegisterUserType) => {
  const url = `${BASE_URL}/auth/register`;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  const response = await fetch(url, requestOptions);

  const violation = response.headers.get("Sl-Violations");

  if (violation) {
    return Promise.reject(JSON.parse(violation));
  }

  const data = await handleResponse(response);
  return data;
};

export const userService = {
  login,
  register,
  // logout,
  // getUser,
  // updateUser,
  // deleteUser,
};
