import { RegisterResponseType, RegisterUserType } from "@/types/user.types";

import axiosInterceptor from ".";

const login = async (email: string, password: string) => {
  const { data } = await axiosInterceptor.post("/auth/login", {
    email,
    password,
  });

  return data;
};

const register = async (
  user: RegisterUserType
): Promise<RegisterResponseType> => {
  const { data } = await axiosInterceptor.post("/auth/register", user);
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
