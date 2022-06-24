import React from 'react';
import {
  WiFahrenheit,
  WiDirectionUp,
  WiThermometerExterior,
} from 'weather-icons-react';

const degToCompass = (num) => {
    const val = Math.floor(num/22.5+.5);
    const arr = [
      "N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW",
      "SW","WSW","W","WNW","NW","NNW"
    ]
    return arr[val % 16];
}


const iconSize = 40;

function Weather({weather, currentLocation}) {
  const windDeg = `rotate(${weather.wind.deg}deg)`;
  const windDir = degToCompass(weather.wind.deg);

  return (
    <div className='m-4 p-4' >
      <div className='flex flex-col items-left'>
        <h2 className='text-xl text-left pl-3'>
        {weather.weather[0].description.charAt(0).toUpperCase() +
          weather.weather[0].description.slice(1)}
        </h2>
        <div className='flex flex-row items-center text-xl pt-2'>
          <WiThermometerExterior size={iconSize} />
            {weather.main.temp}
          <WiFahrenheit size={40}/>
        </div>
        <div className='flex flex-row items-center text-xl'>
          <WiDirectionUp style={{transform: windDeg}}size={iconSize} />
          {windDir + ' ' + weather.wind.speed + ' mph'}
        </div>
      </div>
    </div>
  )
}

export default Weather;
