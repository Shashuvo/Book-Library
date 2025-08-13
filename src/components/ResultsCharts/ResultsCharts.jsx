import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const ResultsData = [
  {
    name: 'Pride and Prejudice',
    uv: 1200, // Online sales
    pv: 800,  // Physical sales
    amt: 2000 // Total sales
  },
  {
    name: 'The Kite Runner',
    uv: 1500,
    pv: 950,
    amt: 2450
  },
  {
    name: 'Life of Pi',
    uv: 1100,
    pv: 1400,
    amt: 2500
  },
  {
    name: 'A Man Called Ove',
    uv: 1700,
    pv: 1300,
    amt: 3000
  },
  {
    name: 'Lalsalu',
    uv: 900,
    pv: 1200,
    amt: 2100
  },
  {
    name: 'The Book Thief',
    uv: 1400,
    pv: 1600,
    amt: 3000
  },
  {
    name: 'One Hundred Years of Solitude',
    uv: 1300,
    pv: 1100,
    amt: 2400
  }
];

const getIntroOfPage = (label) => {
  if (label === 'Pride and Prejudice') {
    return "Pride and Prejudice's top sell.";
  }
  if (label === 'The Kite Runner') {
    return "The Kite Runner's top sell.";
  }
  if (label === 'Life of Pi') {
    return "Life of Pi's top sell.";
  }
  if (label === 'A Man Called Ove') {
    return "A Man Called Ove's top sell.";
  }
  if (label === 'Lalsalu') {
    return "Lalsalu's top sell.";
  }
  if (label === 'The Book Thief') {
    return "The Book Thief's top sell.";
  }
  if (label === 'One Hundred Years of Solitude') {
    return "One Hundred Years of Solitude's top sell.";
  }
  return '';
};

const CustomTooltip = ({ active, payload, label }) => {
  const isVisible = active && payload && payload.length;
  return (
    <div className="custom-tooltip" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      {isVisible && (
        <>
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{getIntroOfPage(label)}</p>
          <p className="desc">Physical Sales.</p></>
      )}
    </div>
  );
};



const ResultsCharts = () => {
    return (
        <div className='flex justify-center mt-4'>
            <BarChart width={1400} height={400} data={ResultsData} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Tooltip content={CustomTooltip}></Tooltip>
            <Bar dataKey={"pv"} barSize={20} fill='#63b3ed'></Bar>
            </BarChart>
        </div>
    );
};

export default ResultsCharts;