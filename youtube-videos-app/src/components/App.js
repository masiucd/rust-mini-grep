import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api';

function App() {
  const [videos, setVideos] = useState([]);

  const onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };
  return (
    <MainWrapper>
      <SearchBar onTermSubmit={onTermSubmit} />
      <VideoList videos={videos} />
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.main`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 94%;
`;
