import React from 'react';
import '../../../../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  LineSeries,
} from 'react-vis';

import { formatDate } from './helpers';

function SurfForecast({currentLocation}) {
  const allWaveMaxes = currentLocation.forecast.map(entry => {
    return {
      x: entry.timestamp,
      y: entry.surf.raw.max,
    }
  });

  const allWaveMins = currentLocation.forecast.map(entry => {
    return {
      x: entry.timestamp,
      y: entry.surf.raw.min,
    }
  });



  return (
    <div>
      <h2 className="font-bold pt-4">Forecast</h2>
      <XYPlot height={300} width={800} xType="ordinal">
        <XAxis
          tickTotal={0}
          style={{
            ticks: {stroke: '#ffffff'},
            marginBottom: '50px',
            text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}}}

          tickFormat={t => {
            if (new Date().getHours() === new Date(t).getHours()) {
              return formatDate(t);
            } else {
              return;
            }
          }}
          tickLabelAngle={-90}
        />
        <YAxis
          style={{
            ticks: {stroke: '#ffffff'},
            marginBottom: '50px',
            text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}}}
        />
        <LineSeries data={allWaveMaxes} />
        <LineSeries data={allWaveMins} />
      </XYPlot>
    </div>
  )
}

export default SurfForecast;
