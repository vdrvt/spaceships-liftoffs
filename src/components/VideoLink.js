import React from 'react';
import { Link } from 'react-router-dom';

function VideoLink({ video }) {
  return (
    <li>
      <Link to={`/video/${video.id}`}>{video.title}</Link>
    </li>
  );
}

export default VideoLink;
