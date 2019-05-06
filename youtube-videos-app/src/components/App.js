import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api';
import VideoDetail from './VideoDetail';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('legia warszawa');
  }, []);

  const onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[1]);
  };

  const onVideoSlect = video => {
    setSelectedVideo(video);
  };
  return (
    <MainWrapper>
      <SearchBar onTermSubmit={onTermSubmit} />
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSlect={onVideoSlect} />
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
