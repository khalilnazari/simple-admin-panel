import React from "react";
import "./chart.scss";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Page A",
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      pv: 4300,
      amt: 2100,
    },
  ];
  const grid = true;

  return (
    <div className="chart box-shadow">
      <p className="title">Chart Title</p>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data} width="100%">
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="pv" stroke="#5550bd" />
          <Tooltip />
          {grid && (
            <CartesianGrid
              stroke="#e0dfdf"
              strokeDasharray="5 5"
              width="100%"
              height="100%"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
