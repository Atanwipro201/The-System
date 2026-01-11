import React from "react";
import { Link } from "react-router-dom";
// Home page component
export default function Home() {
  return (
    <div>
      <h1>Welcome to The System -Player- </h1>
      <p>Your personal AI assistant for productivity and fitness.</p>
        <p>Come here everyday to track your daily workouts and productivity levels, and receive personalized feedback and motivation.</p>
        <Link to="/verdict">Test of the day</Link> 
    </div>
  );
//we call the test route on the backend to start the test
}