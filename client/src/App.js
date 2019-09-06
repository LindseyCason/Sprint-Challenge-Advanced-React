import React from 'react';
import './App.css';
import Players from './players';
import  FavePlayer  from "./form"

function App() {
  return (
    <div className="App">
      <FavePlayer />
      <Players />
    </div>
  );
}

export default App;
