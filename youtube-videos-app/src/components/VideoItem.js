import React from 'react';

const VideoItem = ({ video }) => {
  return (
    <div>
      <h1>{video.snippet.title}</h1>
    </div>
  );
};

export default VideoItem;
