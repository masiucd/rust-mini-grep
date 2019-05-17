const numsStr = ['one', 'two', 'three', 'four', 'five', 'six'];
export const ranDie = () => numsStr[Math.floor(Math.random() * numsStr.length)];

export const options = [
  'angry',
  'anchor',
  'archive',
  'at',
  'archway',
  'baby',
  'bell',
  'bolt',
  'bone',
  'car',
  'city',
  'cloud',
  'couch',
];
export const ranIcon = arr => arr[Math.floor(Math.random() * arr.length)];

export function choice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export const randomColur = arr => {
  const letter = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    arr += letter[Math.floor(Math.random() * 16)];
  }
  return arr;
};

export const colours = [
  'purple',
  'tomato',
  'magenta',
  'steelblue',
  'yellow',
  'pink',
  'slateblue',
  'brown',
  'black',
  '#ccc',
  '#fe323245',
];

export const coinsSide = [
  { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
  { side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' },
];
