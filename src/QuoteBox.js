import React from 'react';

const QuoteBox = ({ title, quote, date }) => {
  return (
    <div className={"QuoteBox"}>
      <h2>{title}</h2>
      <p>Date: {date}</p>
      <p>{quote}</p>
    </div>
  );
}

export default QuoteBox;