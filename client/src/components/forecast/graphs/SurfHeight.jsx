import React from 'react';
import '../../../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries
} from 'react-vis';

import { formatTime, formatDate, todaysDate } from './helpers';

function SurfHeight({currentLocation}) {

  const today = currentLocation.forecast.filter(data => {
    let inputDate = new Date(data.timestamp);
    if (inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
      return data;
    }
  });

  let maxHeight = 0;
  const todayWaveMaxes = today.map(entry => {
    if (entry.surf.raw.max > maxHeight) { maxHeight = entry.surf.raw.max }
    return {
      x: String(formatTime(entry.timestamp)),
      y: entry.surf.raw.max - entry.surf.raw.min,
    }
  });

  const todayWaveMins = today.map(entry => {
    return {
      x: String(formatTime(entry.timestamp)),
      y: entry.surf.raw.min,
    }
  });

  return (
    <div>
      <h1 className="font-bold text-xl">Surf Height</h1>
      <h2 className="font-bold pt-4">Today</h2>
      <XYPlot
        height={300}
        width={800}
        xType="ordinal"
        stackBy="y"
        yDomain={[0, maxHeight + 1]}
      >
        <XAxis />
        <YAxis />
        <VerticalBarSeries data={todayWaveMaxes} stack={true}/>
        <VerticalBarSeries data={todayWaveMins} stack={true}/>
        <VerticalBarSeries
          data={[{x: String(formatTime(new Date())), y: 30}]}
          stack={false}
          color="#ACDF87"
          barWidth={0.1}
        />
      </XYPlot>
    </div>
  )
}

export default SurfHeight;
