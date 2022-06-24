import React from 'react';
import ReactStars from 'react-stars';

const getClosestTime = (location) => {
  const now = new Date();
  for (let i = 0; i < location.forecast.length; i++) {
    let then = new Date(location.forecast[i].timestamp);
    if (then >= now) {
      return i;
    }
  }
  return 0;
}

function Surf ({currentLocation}) {
  const currentSwell = currentLocation.forecast[getClosestTime(currentLocation)];
  console.log(currentSwell);

  return (
    <div className='m-4 p-4'>
      <h2 className='text-xl'>{currentSwell.surf.humanRelation}</h2>
      <div className='flex flex-col items-right'>
        <div className='text-3xl pt-2 text-left font-bold'>
          {currentSwell.surf.min} - {currentSwell.surf.max} ft
        </div>
        <ReactStars
          className='pt-2 text-2xl'
          count={5}
          size={"24px"}
          value={currentSwell.surf.optimalScore}
          color2={'#114488'}
          edit={false}
        />
      </div>
    </div>
  )
}

export default Surf;
