import React from 'react';

const QuoteBox = ({ title, quote, date, displayTitle, index }) => {
  return (
    <div className={"QuoteBox"}>
      {/* {displayTitle && <h2>{title}</h2>} */}
      {displayTitle && <a href={`quotes/${index}`}>{title}</a>}
      <p>Date: {date}</p>
      <p>{quote}</p>
    </div>
  );
}

export default QuoteBox;