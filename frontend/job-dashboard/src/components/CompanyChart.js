import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function CompanyChart({ jobs }) {

  const companyCount = {};

  jobs.forEach(job => {
    companyCount[job.company] = (companyCount[job.company] || 0) + 1;
  });

  const data = Object.keys(companyCount)
    .map(company => ({
      company,
      count: companyCount[company]
    }))
    .sort((a,b) => b.count - a.count)
    .slice(0,10);

  return (

    <div>

      <h2>Top Hiring Companies</h2>

      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="company"/>
        <YAxis/>
        <Tooltip/>
        <Bar dataKey="count"/>
      </BarChart>

    </div>
  );
}

export default CompanyChart;