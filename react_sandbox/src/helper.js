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
