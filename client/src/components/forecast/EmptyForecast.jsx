import React from 'react';

import Suggested from './Suggested';

function EmptyForecast({locations, userCoordinates}) {
  return (
    <div className="bg-white h-full w-full pt-4 text-3xl text-myblack">
      <Suggested locations={locations} userCoordinates={userCoordinates} />
    </div>
  )
}

export default EmptyForecast;
