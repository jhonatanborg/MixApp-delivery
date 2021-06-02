export default function location(state = null, action) {
  switch (action.type) {
    case "SET_COORDS":
      const coords = action.payload;
      return { ...state, coords };
    case "SET_ADDRESS":
      console.log(action);
      const address = action.payload;
      return { ...state, address };
    default:
      return state;
  }
}
