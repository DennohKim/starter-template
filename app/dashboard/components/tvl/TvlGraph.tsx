// "use client";

// import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// const data = [
//   {
//     name: "Jan",
//     TVL: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Feb",
//     TVL: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Mar",
//     TVL: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Apr",
//     TVL: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "May",
//     TVL: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Jun",
//     TVL: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Jul",
//     TVL: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Aug",
//     TVL: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Sep",
//     TVL: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Oct",
//     TVL: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Nov",
//     TVL: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Dec",
//     TVL: Math.floor(Math.random() * 5000) + 1000,
//   },
// ]

// export default function TvlGraph() {
//   return (
//     <ResponsiveContainer width="100%" height={350}>
//       <AreaChart
//         data={data}
//         margin={{
//           top: 10,
//           right: 30,
//           left: 0,
//           bottom: 0,
//         }}
//       >

//         <XAxis
//           dataKey="name"
//           stroke="#888888"
//           fontSize={12}
//           tickLine={false}
//           axisLine={false}
//         />
//         <YAxis
//           stroke="#888888"
//           fontSize={12}
//           tickLine={false}
//           axisLine={false}
//           tickFormatter={(value) => `$${value}`}
//         />
//         <Tooltip cursor={false} />
//         <Area type="monotone" dataKey="TVL" fill="#2A4A2E" stroke="#23E33E" fillOpacity={80}/>
//       </AreaChart>
//     </ResponsiveContainer>
//   )
// }

"use client";

import React from 'react';
import { faker } from '@faker-js/faker';
import { CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js";
import { Line } from 'react-chartjs-2';





ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'TVL',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(35, 227, 62)",
      backgroundColor: "rgba(35, 227, 62, 0.3)",
    },
  ],
}

export default function TvlGraph() {
  return <Line options={options} data={data} />;
}