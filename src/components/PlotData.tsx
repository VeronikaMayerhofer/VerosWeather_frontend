import React from 'react';

import Plot from 'react-plotly.js';

interface Props {
    data_y: number[]
    data_x: string[]
    unit: string
}

const PlotData: React.FC<Props> = ({data_x, data_y, unit, weather_var}) => {

    return (
        <Plot
            data={[
                {
                    x: data_x,
                    y: data_y,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'blue'},
                    name: weather_var
                },
            ]}
      layout = {
      {
          width: 800,
          height: 500,
          title: 'Hourly Weather Plot',
          yaxis: {
              title: unit,
          }
      }
  }

      />

  )
      ;

  }
    ;

    export default PlotData