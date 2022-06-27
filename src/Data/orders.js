import shoesCatSquare from '../images/shoesCatSquare.jpg';

export const ORDERS = [
  {
    id: 0,
    date: 'Tue Jun 14 2022 19:09:57 GMT+0300 (GMT+03:00)',
    customer: 'Bilal Avvad',
    email: 'awadbilal99@gmail.com',
    phone: '0531 581 50 31',
    deliveryAddress:
      'İSTANBUL / TÜRKİYE, 34353 Beşiktaş, Çırağan Caddesi, Osmanpaşa Mektebi Sokak, No: 4 - 6',
    totalPrice: 600,
    totalDiscount: 85,
    products: [
      {
        id: 0,
        image: shoesCatSquare,
        title: 'Sneakers 101',
        price: 250,
        discount: 20,
        category: 'Shoes',
        orderCount: 0,
        quantity: 5,
      },
      {
        id: 1,
        image: shoesCatSquare,
        title: 'Sneakers 202',
        price: 350,
        discount: 10,
        category: 'Shoes',
        orderCount: 0,
        quantity: 5,
      },
    ],
  },
  {
    id: 1,
    date: 'Wed Jun 15 2022 18:08:35 GMT+0300 (GMT+03:00)',
    customer: 'Bilal Avvad',
    email: 'awadbilal99@gmail.com',
    phone: '0531 581 50 31',
    deliveryAddress:
      'İSTANBUL / TÜRKİYE, 34353 Beşiktaş, Çırağan Caddesi, Osmanpaşa Mektebi Sokak, No: 4 - 6',
    totalPrice: 350,
    totalDiscount: 35,
    products: [
      {
        id: 1,
        image: shoesCatSquare,
        title: 'Sneakers 202',
        price: 350,
        discount: 10,
        category: 'Shoes',
        orderCount: 0,
        quantity: 5,
      },
    ],
  },
];
