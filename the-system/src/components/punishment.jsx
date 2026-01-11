import React from 'react';
import { Link } from 'react-router-dom';

export default function Punishment(props) {
  return (
    <div>
        <h2>{props.data}</h2>
        <p>come back tomorow for more...</p>
        <Link to="/">Go to Home</Link>
    </div>
  );
}