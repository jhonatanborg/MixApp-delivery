import instance from '../config/config';

export default {
  sendPurchase: (sale, token) =>
    instance({
      method: 'POST',
      url: `/sale`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: sale,
    })
      .then((res) => console.log(resp))
      .catch((err) => console.log(err)),
  getPurchases: (token) =>
    instance({
      method: 'GET',
      url: '/my-purchase',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getPurchase: (id, token) =>
    instance({
      method: 'GET',
      url: `/sale/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
