import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Welcome to Resume Maker</h1>
        <h3>Please Login or Register to proceed</h3>
      </header>
      <main>
        <a className="App-link" href="/login">
          Login
        </a>
      </main>
    </div>
  );
};

export default Home;
