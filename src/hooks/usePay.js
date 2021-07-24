import { useState, useEffect } from 'react';

export function usePay() {
  const [pay, setPaySelected] = useState([
    {
      id: 15,
      title: 'Dinheiro',
      img: '/uploads/payments/dinheiro.svg',
      select: true,
    },
  ]);
  const handlePaySelected = (pay) => {
    setPaySelected(pay);
  };
  return { pay, handlePaySelected };
}
