import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteBox from './QuoteBox';

function AllQuotes() {
  const [quotes, setQuotes] = useState({});
  const [loadQuotes, setLoadQuotes] = useState(false);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchAllQuotes = async () => {
      const result = await axios(
        'http://localhost:8000/all',
      );

      // Find book titles
      for (let i in result.data) {
        setTitles(oldArray => [...oldArray, i]);
      }

      // Set quotes json
      setQuotes(result.data);
      setLoadQuotes(true);
    }

    fetchAllQuotes();
  }, []);

  return (
    <div className="all-quotes">
      {loadQuotes && titles.map((t, index) => quotes[t].map(q => <QuoteBox {...{ title: t, date: q.date, quote: q.quote, displayTitle: true, index: index }} />))}
    </div>
  );
}

export default AllQuotes;