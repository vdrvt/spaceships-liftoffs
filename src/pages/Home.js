import React from 'react';

export const videos = [
    { id: 1, title: 'SpaceX Falcon 9 Launch', url: 'hhttps://www.youtube.com/watch?v=wbSwFU6tY1c', startTime: 1314 },
    { id: 2, title: 'Space Shuttle Launch Audio', url: 'https://www.youtube.com/watch?v=OnoNITE-CLc', startTime: 82 },
    { id: 3, title: 'STS-129 HD Launch', url: 'https://www.youtube.com/watch?v=zsJpUCWfyPE', startTime: 82 },
    { id: 4, title: 'Shuttle launch (Hubble 2010 - STS 125)', url: 'https://www.youtube.com/watch?v=uuYoYl5kyVE', startTime: 55 }, 
    { id: 5, title: 'The Final Launch of Discovery', url: 'https://www.youtube.com/watch?v=pAGYsqfXkyA', startTime: 214 },
    { id: 6, title: 'Shuttle Atlantis STS-132', url: 'https://www.youtube.com/watch?v=5KygwcZ545U', startTime: 561 } //https://youtu.be/5KygwcZ545U?t=561
  ];
  

  function Home() {
    return (
      <div className="container">
        <h1>Spaceship Liftoff Videos</h1>
        <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <h2>{video.title}</h2>
              <div className="video-container">
                <iframe
                  src={`https://www.youtube.com/embed/${video.url.split('v=')[1]}?start=${video.startTime}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Home;
