import React, { useState } from 'react';
import styled from 'styled-components';
import { todosList } from '../../helper';
import { mediaMax } from '../../styles';
import Todo from './Todo';
import TodoForm from './TodoForm';

export default function TodoList() {
  const [todos, setTodos] = useState(todosList);

  const addTodo = text => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };

  const deleteTodo = index => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  return (
    <TodoListWrapper>
      {todos.map((todo, i) => (
        <Todo
          key={i}
          index={i}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </TodoListWrapper>
  );
}

const TodoListWrapper = styled.div`
  height: 100%;
  width: 85%;
  padding: 5em;
  border-radius: 2rem;
  box-shadow: 4px 3px 4px 2px #cecece;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 0.4em 0;
    font-size: 2.6em;
    box-shadow: 4px 3px 4px 2px #cecece;
    padding: 0.8em;
    width: 30em;
    border-radius: 1em;
    ${mediaMax.tablet`width: 17em;`}
    ${mediaMax.phone`width: 15em;`}
  }
  .todo {
    position: relative;
  }
  #check {
    position: absolute;
    top: 27px;
    right: 60px;
    ${mediaMax.phone`top: 52px ;`}
  }
  #trash {
    position: absolute;
    top: 27px;
    right: 20px;
    ${mediaMax.phone`top: 52px ;`}
  }
`;
