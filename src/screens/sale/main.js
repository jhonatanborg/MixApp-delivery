import React from 'react';
import { useSelector } from 'react-redux';
import ListProducts from './products/ListProducts';
import SaleEmpty from './empty/SaleEmpty';
const Sale = () => {
  const sale = useSelector((state) => state.sale);
  return sale && sale.length > 0 ? <ListProducts /> : <SaleEmpty />;
};

export default Sale;
