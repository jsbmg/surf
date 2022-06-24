import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Weather from './Weather';
import Surf from './Surf';
import SurfHeight from './graphs/SurfHeight';
import SurfForecast from './graphs/SurfForecast';

function Forecast({locations}) {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loaded,setLoaded] = useState(false);

  let params = useParams();

  useEffect(() => {
    (async () => {
      try {
        let location = locations[params.id];
        let url = `/api/forecast/${location.id}`;
        let response = await fetch(url);
        let locationJson = await response.json();
        // fix on server side so the response is an object
        // and not wrapped in an array
        url = `/api/weather?lat=${location.latitude}&lon=${location.longitude}`;
        response = await fetch(url);
        const weather = await response.json();

        setWeather(weather);
        setCurrentLocation(locationJson[0]);
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [location]);

  if (!loaded) { return null };


  return (
    <div className="h-full w-full bg-white flex flex-col items-center text-myblack">
      <h1 className="text-2xl pt-2 font-bold">
        {currentLocation.name}, {weather.name}
      </h1>
      <div className='forecast-elements'>
        <div className='flex flex-col w-full justify-center'>
          <div className='flex flex-row justify-center'>
            <Weather weather={weather} currentLocation={currentLocation} />
            <Surf currentLocation={currentLocation} />
          </div>
          <SurfHeight currentLocation={currentLocation} />
          <SurfForecast currentLocation={currentLocation} />
        </div>
      </div>
    </div>
  )
}

export default Forecast;
