import React from 'react';

const QuoteBox = ({ title, quote, date, displayTitle, index }) => {
  return (
    <div className={"quote-box"}>
      {displayTitle && <a className={"book-link"} href={`quotes/${index}`}>{title}</a>}
      <p className={"date"}>Date: {date}</p>
      <p className={"quote"}>"{quote}"</p>
    </div>
  );
}

export default QuoteBox;