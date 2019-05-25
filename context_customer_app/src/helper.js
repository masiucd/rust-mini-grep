import uuid from 'uuid/v4';

export const data = [
  {
    id: uuid(),
    name: 'Boris Maretshko',
    email: 'boris@gmail.com',
    phone: '123 222 5443',
  },
  {
    id: uuid(),
    name: 'Andrei Shevshenko',
    email: 'adrei@gmail.com',
    phone: '432 231 0980',
  },
  {
    id: uuid(),
    name: 'Linda Maretshko',
    email: 'linda@gmail.com',
    phone: '898 454 1234',
  },
  {
    id: uuid(),
    name: 'Tina Stankovic',
    email: 'tina@gmail.com',
    phone: '845 212 9221',
  },
];

export const randomStuff = arr => {
  const randIndx = Math.floor(Math.random() * arr.length);
  return arr[randIndx];
};

export const funnyTitle = [
  'Customer app',
  'Peoples App',
  'Cool React App',
  'Yeahhh Boooi',
];
