import React from 'react';
import styled from 'styled-components';
import VideoItem from './VideoItem';
import { mediaMax, mediaMin } from '../media';

const VideoList = ({ videos, onVideoSlect }) => {
  const renderList = videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      onVideoSlect={onVideoSlect}
    />
  ));
  return (
    <VideoListWrap>
      <p>{renderList}</p>
    </VideoListWrap>
  );
};

const VideoListWrap = styled.div`
  font-display: flex;
  margin-top: 1.6rem;
  width: 76%;
  box-shadow: 4px 3px 3px 5px #ccc;
  margin: 0 auto;
  flex-wrap: wrap;
  ${mediaMax.phone`  flex-direction: column;`}
`;

export default VideoList;
