import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

function LocationChart({ jobs }) {

  const locationCount = {};

  jobs.forEach(job => {
    locationCount[job.location] = (locationCount[job.location] || 0) + 1;
  });

  const data = Object.keys(locationCount)
    .map(location => ({
      name: location,
      value: locationCount[location]
    }))
    .slice(0,5);

  return (

    <div>

      <h2>Top Job Locations</h2>

      <PieChart width={400} height={300}>

        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
        />

        <Tooltip/>

      </PieChart>

    </div>
  );
}

export default LocationChart;