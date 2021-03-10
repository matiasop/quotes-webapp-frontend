import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import QuoteBox from './QuoteBox';

const BookQuotes = () => {
  let { id } = useParams();

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
    <div>
      <h3 className={"book-title"}>Book Title: {loadQuotes && titles[id]}</h3>
      <div className={"book-quotes"}>
        {loadQuotes && quotes[titles[id]].map(q => <QuoteBox {...{ title: titles[id], date: q.date, quote: q.quote, displayTitle: false, index: id }} />)}
      </div>
    </div>
  );
}

export default BookQuotes;