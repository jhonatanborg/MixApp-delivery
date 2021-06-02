export const addItem = (item) => ({
  type: "ADD_ITEM_SALE",
  payload: item,
});
export const removeItem = (index) => ({
  type: "REMOVE_ITEM_SALE",
  payload: index,
});
export const resetSale = (item) => ({
  type: "RESETE",
  payload: item,
});
export const AddQtdItem = (item) => ({
  type: "ADD_QUANTITY",
  payload: item,
});
export const SubQtdItem = (item) => ({
  type: "SUB_QUANTITY",
  payload: item,
});
