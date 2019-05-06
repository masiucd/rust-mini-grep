import React from 'react';
import styled from 'styled-components';
import { mediaMax, mediaMin } from '../media';

const VideoItem = ({ video, onVideoSlect }) => (
  <VideoItemWrapper onClick={() => onVideoSlect(video)}>
    <Image
      src={video.snippet.thumbnails.medium.url}
      alt={video.snippet.title}
    />
    <Item>{video.snippet.title}</Item>
  </VideoItemWrapper>
);

const VideoItemWrapper = styled.div`
  display: flex;
  ${mediaMax.phone`  flex-direction: column;`}
`;
const Image = styled.img`
  align-self: flex-start;
  justify-self: flex-start;
  border: 2px solid #123;
  margin: 1rem;

  max-width: 180px;
  ${mediaMax.phone`  justify-content: center; display: block; margin: 0 auto; margin-bootom: 8px`}
`;
const Item = styled.div`
  padding: 0.6rem;
  align-self: flex-start;
  justify-self: flex-start;
  font-size: 1.5rem;
  text-align: center;
  align-self: center;
  width: 60%;
  margin: 0 auto;
  box-shadow: 2px 2px 3px 4px #ccc;
  &:hover {
    transition: all 0.4s linear;
    transform: scale(1.1);
    font-size: 1.6rem;
    text-shadow: 4px 4px 3px #ccc;
  }
`;

export default VideoItem;
