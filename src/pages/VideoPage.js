import React from 'react';
import { useParams } from 'react-router-dom';
import { videos } from './Home';

function VideoPage() {
  const { id } = useParams();
  const video = videos.find((v) => v.id === parseInt(id, 10));

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div>
      <h1>{video.title}</h1>
      <iframe
        width="640"
        height="480"
        src={`https://www.youtube.com/embed/${video.url.split('v=')[1]}`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPage;
