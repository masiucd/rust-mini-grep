import React from 'react';
import { GlobalStyle } from './globals/globalstyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Particles from 'react-particles-js';

export default function App() {
  return (
    <>
      <GlobalStyle />

      <TodoInput />

      <TodoList />
    </>
  );
}
