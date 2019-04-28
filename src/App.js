import React from 'react';

import './App.css';
import Calculator from './components/calculator';
import History from './components/History';
import Contador from './components/contador';



function App() {
  return (
    <div className="App">
      <Calculator/>
      <History/>
      <h1> Hacemos un contador con redux</h1>
      <Contador/>
    </div>
  );
}

export default App;
