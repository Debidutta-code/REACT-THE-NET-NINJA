import './App.css';
import React from 'react';

function App() {

  const name = "Dev";
  const arr = [1, 2, 3, 4, 5];
  const viewed = 20;
  // const obj = {n: 'dev', age:20};

  const link = "https://www.google.com";

  return (
    <div className="App">
      <h1>This is {name}</h1>
      <h2>Arr = {arr} </h2>
      <h2>{name} viewed your profile {viewed} times</h2>
      {/* <p>{ obj }</p> */}

      <p> {Math.floor(Math.random() * (6 - 1 + 1)) + 1 } </p>

      <a href={link}>Google</a>
    </div>
  );
}

export default App;
