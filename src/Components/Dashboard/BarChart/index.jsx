import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BarLabel() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
        },
      ]}
      series={[
        { data: [4.5, 3.5, 5,2.5,4,3,2], label: "Positive Feedback" },
        { data: [3, 2.5, 4,1.5,3,2,1], label: "Negative Feedback" },
        { data: [4, 3, 4.5, 2, 3.5, 2.5, 1.5], label: "Ratings" },
      ]}
      // width={800}
      height={300}
    />
  );
}
