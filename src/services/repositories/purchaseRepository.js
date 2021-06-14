import instance from "../config/config";
import getEnvVars from "../../../environment";
import axios from "axios";

const { BASE_URL } = getEnvVars();
export default {
  sendPurchase: (sale, token) =>
    instance({
      url: `/sale`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: sale,
    }),
  getPurchases: (token) =>
    instance({
      method: "GET",
      url: "/my-purchase",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
