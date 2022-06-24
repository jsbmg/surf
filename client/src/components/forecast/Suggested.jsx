import React from 'react';
import { Link } from 'react-router-dom';

function calcCrow(lat1, lon1, lat2, lon2) {
  console.log(lat1, lon1, lat2, lon2);
  let R = 6371; // km
  let dLat = toRad(lat2-lat1);
  let dLon = toRad(lon2-lon1);
  lat1 = toRad(lat1);
  lat2 = toRad(lat2);

  let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  let d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
  return Value * Math.PI / 180;
}

function Suggested ({locations, userCoordinates}) {
  const locationsWithDistance = locations.map((loc, i) => {
    const milesAway = calcCrow(
      loc.latitude,
      loc.longitude,
      userCoordinates[0],
      userCoordinates[1]
    )
    loc.milesAway = milesAway;
    loc.index = i;
    return loc;
  });

  let sortedDistances = locationsWithDistance.sort((loc1, loc2) => {
    return loc1.milesAway - loc2.milesAway
  });

  sortedDistances = sortedDistances.slice(0, 5);

  return (
    <>
      <h1>Suggested locations:</h1>
      <div className="flex flex-col items-center">
        {sortedDistances.map((loc,i) => {
          return (
            <Link key={i} to={`/forecast/${loc.index}`} className='text-xl'>
              <div className='flex flex-row gap-2  items-center'>
                <div>{loc.name}</div>
                <div className='text-base text-gray-500'>
                  {Math.round(loc.milesAway)} mi
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Suggested;
