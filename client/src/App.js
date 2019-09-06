import React from 'react';
import './App.css';
import Players from './players';
import  FavePlayer  from "./form"
import Chart from "./chart"

function App() {
  return (
    <div className="App">
      <Chart />
      <FavePlayer />
      <Players />
    </div>
  );
}

export default App;
