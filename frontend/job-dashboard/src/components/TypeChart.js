import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function TypeChart({ jobs }) {

  const typeCount = {};

  jobs.forEach(job => {
    typeCount[job.job_type] = (typeCount[job.job_type] || 0) + 1;
  });

  const data = Object.keys(typeCount).map(type => ({
    type,
    count: typeCount[type]
  }));

  return (

    <div>

      <h2>Job Types</h2>

      <BarChart width={500} height={300} data={data}>

        <XAxis dataKey="type"/>
        <YAxis/>
        <Tooltip/>
        <Bar dataKey="count"/>

      </BarChart>

    </div>
  );
}

export default TypeChart;