import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function TrendChart({ jobs }) {

  const titleCounts = {};

  jobs.forEach(job => {
    titleCounts[job.title] = (titleCounts[job.title] || 0) + 1;
  });

  const data = Object.keys(titleCounts)
    .slice(0,10)
    .map(title => ({
      title,
      count: titleCounts[title]
    }));

  return (

    <div>

      <h2>Trending Job Roles</h2>

      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="title"/>
        <YAxis/>
        <Tooltip/>
        <Line dataKey="count"/>
      </LineChart>

    </div>

  );
}

export default TrendChart;