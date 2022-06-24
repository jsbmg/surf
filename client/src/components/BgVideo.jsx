import React from 'react';

function BgVideo () {
  return (
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="min-w-full min-h-full absolute object-cover"
      >
      <source src="../../assets/Waves.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default BgVideo;
