export default function payment(
  state = [
    {
      id: 15,
      title: 'Dinheiro',
      img: '/uploads/payments/dinheiro.svg',
      select: true,
    },
  ],
  action
) {
  switch (action.type) {
    case 'ADD_PAY':
      return action.payload;
    default:
      return state;
  }
}
