import React from 'react';

import config from '../config/index.json';

const quotationMarks = '"';

const Quote = (props: { index: number }) => {
  const { quotes } = config;
  const { index } = props;
  return (
    <div
      className="w-full text-center py-16"
      style={{ backgroundColor: '#2b3341' }}
    >
      <span className="text-xl tracking-tight text-gray-300 sm:text-2xl md:text-3xl">
        <p className="mb-16 mx-16 font-serif">
          {quotationMarks}
          {quotes[index]?.description}
          {quotationMarks}
        </p>
      </span>
      <span className="text-2xl text-gray-300 font-bold sm:text-3xl md:text-4xl ">
        <p className="font-serif">- {quotes[index]?.author}</p>
      </span>
    </div>
  );
};

export default Quote;
