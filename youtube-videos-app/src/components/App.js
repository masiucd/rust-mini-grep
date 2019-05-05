import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import youtube from '../api';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectVide, setSelectVideo] = useState(null);

  const onTermSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term,
      },
    });
  };
  return (
    <MainWrapper>
      <SearchBar onTermSubmit={onTermSubmit} />
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.main`
  font-family: sans-serif;
`;
