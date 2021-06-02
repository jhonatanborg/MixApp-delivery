export default function company(state = [], action) {
  switch (action.type) {
    case "ADD_COMPANIES":
      return (state = action.payload);
    case "SET_CATEGORIE_FILTER":
      return (state.company = action.payload);
    case "SET_COMPANY_SALE":
      const company_sale = action.payload;
      state = action.payload;
      return state;
    default:
      return state;
  }
}
