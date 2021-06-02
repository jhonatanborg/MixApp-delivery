import instance from "../config/config";

export default {
  getAddress: (coords) =>
    instance({
      method: "POST",
      url: "/coord",
      data: coords,
    }),
};
