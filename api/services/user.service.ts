import { BASE_URL } from ".";
import { handleResponse } from "../handleResponse";

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

const register = async (user: any) => {
  const url = `${BASE_URL}/auth/register`;
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  const response = await fetch(url, requestOptions);
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
