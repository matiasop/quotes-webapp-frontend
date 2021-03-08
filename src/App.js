import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllQuotes from './AllQuotes';
import Books from './Books';
import BookQuotes from './BookQuotes';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Quotes (Home)</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/quotes/:id" children={<BookQuotes />}>
          </Route>
          <Route path="/">
            <AllQuotes />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>
}
