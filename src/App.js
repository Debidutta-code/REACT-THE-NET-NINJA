import './App.css';
import React from 'react';

function App() {

  const name = "Dev";
  const arr = [1, 2, 3, 4, 5];
  const viewed = 50;

  return (
    <div className="App">
      <h1>This is {name}</h1>
      <h2>Arr = {arr} </h2>
      <h2>{name} viewed your profile {viewed} times</h2>
    </div>
  );
}

export default App;
