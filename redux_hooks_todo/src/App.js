import React from 'react';
import { GlobalStyle, PageWrapper } from './components/globals/globalStyles';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <PageWrapper>
      <GlobalStyle />
      <TodoList />
    </PageWrapper>
  );
}
