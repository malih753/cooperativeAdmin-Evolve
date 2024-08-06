import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { value: 40 },
  { value: 40 },
  { value: 40 },
  { value: 40 },
  { value: 40 },
];

const size = {
  width: 400,
  height: 200,
};

export default function PieArcLabel() {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => ` ${item.value}%`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'black',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
  );
}