import React from 'react';
import { Link } from 'react-router-dom';

    //This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(lat1, lon1, lat2, lon2)
{
  console.log(lat1, lon1, lat2, lon2);
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value)
{
    return Value * Math.PI / 180;
}

function Placeholder({locations, userCoordinates}) {

  const locationsWithDistance = locations.map(loc => {
    const milesAway = calcCrow(
      loc.latitude,
      loc.longitude,
      userCoordinates[0],
      userCoordinates[1]
    )
    loc.milesAway = milesAway;
    return loc;
  });

  let sortedDistances = locationsWithDistance.sort((loc1, loc2) => {
    return loc1.milesAway - loc2.milesAway
  });

  sortedDistances = sortedDistances.slice(0, 5);

  return (
    <div className=" h-full w-full pt-4 text-3xl text-myblack">
      <h1>Suggested locations:</h1>
      <div className="flex flex-col items-center">
        {sortedDistances.map((loc,i) => {
          return (
            <Link key={i} to={`/forecast/${i}`} className='text-xl'>
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
  </div>
  )
}

export default Placeholder;
