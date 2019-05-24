import uuid from 'uuid/v4';

export const randomHelper = arr => {
  let randIndx = Math.floor(Math.random() * arr.length);
  return arr[randIndx];
};

export const colours = [
  'steelblue',
  'slateblue',
  'rgba(16,216,116,0.6)',
  'rgba(126,116,316,0.6)'
];

export const brandings = ['Cool Appp', 'awsome I like it', 'mmm verry nice!!'];

export const contactsData = [
  {
    id: uuid(),
    name: 'Boris Aletshko',
    email: 'boris@gmail.com',
    phone: '555 555 5555'
  },
  {
    id: uuid(),
    name: 'Moris Putinov',
    email: 'moris@gmail.com',
    phone: '123 454 21212'
  },
  {
    id: uuid(),
    name: 'Andrei Arshavin',
    email: 'andrei@gmailc.com',
    phone: '333 443 9342'
  }
];
