import React from 'react';
import styled from 'styled-components';
import { mediaMax } from '../media';

export default function VideoDetail({ video }) {
  if (!video) {
    return <div style={{ margin: '1rem' }}>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <DescriptionWrap>
      <iframe src={videoSrc} frameBorder="0" />

      <H4>{video.snippet.title}</H4>
      <p>{video.snippet.title}</p>
    </DescriptionWrap>
  );
}

const DescriptionWrap = styled.div`
  padding: 1rem;
  box-shadow: 4px 4px 3px 4px #ccc;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  iframe {
    width: 20rem;
  }
  iframe {
    ${mediaMax.phone`width: 14rem;`}
  }
`;
const H4 = styled.h3`
  margin: 1rem;
  font-size: 1.2rem;
`;
