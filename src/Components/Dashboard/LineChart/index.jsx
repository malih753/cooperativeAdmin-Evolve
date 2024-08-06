import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [0, 2, 4, 6, 3, 0], label:"Discussion"
        },
         {
          data: [0, 4, 6, 4, 2.5, 0], label:"Question"
        },
         {
          data: [0, 6, 6.5, 7, 3.5, 0], label:"Poll"
        },
      ]}
      // width={500}
      height={300}
    />
  );
}