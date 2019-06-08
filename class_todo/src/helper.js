import uuid from 'uuid/v4';

export const todosDb = [
  { id: uuid(), task: 'Go out with the dog', completed: false },
  { id: uuid(), task: 'Get some food', completed: false },
  { id: uuid(), task: 'Go to the gym', completed: false },
];
