export default function sale(state = [], action) {
  switch (action.type) {
    case "ADD_ITEM_SALE":
      const newSale = [...state, action.payload.sale];
      return newSale;
    case "REMOVE_ITEM_SALE":
      return state.filter((item, index) => index !== action.payload);
    case "ADD_QUANTITY":
      const sale = state;
      return sale.map((product) =>
        product.product_id === action.payload.product_id
          ? { ...product, product_qtd: product.product_qtd + 1 }
          : product
      );
    case "SUB_QUANTITY":
      const newCArt = state;
      return newCArt.map((product) =>
        product.product_id === action.payload.product_id
          ? {
              ...product,
              product_qtd:
                product.product_qtd !== 1 ? product.product_qtd - 1 : 1,
            }
          : product
      );
    case "RESETE":
      const newResetSale = [];
      newResetSale.push(action.payload);
      return newResetSale;
    default:
      return state;
  }
}
