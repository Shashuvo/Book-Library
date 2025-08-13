import React, { use } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';



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



const ResultsCharts = ({salesPromise}) => {
  const ResultsDataRes = use(salesPromise);
  const ResultsData = ResultsDataRes.data;

  // Data processsing for the chart
  const ResultsDataCharts = ResultsData.map(bookData => {
    const book = {
      name: bookData.name,
      uv: bookData.sales.online,
      pv: bookData.sales.physical,
      amt: bookData.sales.audiobook,
      category: bookData.category
    }
    return book;
  })

  return (
    <div className='flex justify-center mt-4'>
      <BarChart width={1400} height={400} data={ResultsDataCharts} margin={{
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