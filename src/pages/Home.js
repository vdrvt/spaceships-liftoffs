import React from 'react';

export const videos = [
    { id: 1, title: 'SpaceX Falcon 9 Launch', url: 'https://www.youtube.com/watch?v=wbSwFU6tY1c' },
    { id: 2, title: 'NASA Space Shuttle Launch', url: 'https://www.youtube.com/watch?v=2A8_9yNF9s4' },
    { id: 3, title: 'Blue Origin New Shepard Launch', url: 'https://www.youtube.com/watch?v=4SVlLQ2_1_M' },
    { id: 4, title: 'Virgin Galactic SpaceShipTwo Launch', url: 'https://www.youtube.com/watch?v=QJQnDvNkxLA' },
    { id: 5, title: 'ESA Ariane 5 Launch', url: 'https://www.youtube.com/watch?v=VzMDfkZw0MU' },
    { id: 6, title: 'Russian Soyuz Launch', url: 'https://www.youtube.com/watch?v=VJrE5rWf1c4' },
    { id: 7, title: 'SpaceX Falcon Heavy Launch', url: 'https://www.youtube.com/watch?v=wbSwFU6tY1c' },
    { id: 8, title: 'NASA Saturn V Launch', url: 'https://www.youtube.com/watch?v=xC1ZzjvGiYY' },
    { id: 9, title: 'Blue Origin New Glenn Launch', url: 'https://www.youtube.com/watch?v=uvSFIW4hnmM' },
    { id: 10, title: 'Virgin Orbit LauncherOne Launch', url: 'https://www.youtube.com/watch?v=ohughI3L_n8' },
    { id: 11, title: 'Rocket Lab Electron Launch', url: 'https://www.youtube.com/watch?v=2wWwIIzHfVA' },
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
                  src={`https://www.youtube.com/embed/${video.url.split('v=')[1]}`}
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
