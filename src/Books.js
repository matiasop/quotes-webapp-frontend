import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Books = () => {
  // let match = useRouteMatch();

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
      <h2>Book Quotes</h2>
      <ul>
        {loadQuotes && titles.map((t, i) => <li><a href={`quotes/${i}`}>{t}</a></li>)}
      </ul>
    </div>
  );
}

export default Books;