import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderList = videos.map(video => <VideoItem video={video} />);
  return (
    <div>
      <h1>videos</h1>
      <p>{renderList}</p>
    </div>
  );
};

export default VideoList;
