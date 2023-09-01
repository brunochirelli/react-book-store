export type RegisterUserType = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type RegisterResponseType = {
  message: string;
  token: string;
};

export type UserType = {
  id: string;
  fullName: string;
  email: string;
};

export type LoginUserType = {
  username: string;
  password: string;
};
