import instance from "../config/config";

export default {
  Signin: (login, password) =>
    instance({
      method: "POST",
      url: "/session",
      data: {
        login: login,
        password: password,
      },
    }),
  signUp: (user) =>
    instance({
      method: "POST",
      url: "/user-client",
      data: user,
    }),
};
