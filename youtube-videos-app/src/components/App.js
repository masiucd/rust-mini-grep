import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../api';

class App extends React.Component {
  state = {
    videos: [],
  };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <MainWrapper>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </MainWrapper>
    );
  }
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
