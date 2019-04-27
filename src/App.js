import React from 'react';

import './App.css';
import Calculator from './components/calculator';
import History from './components/History';


function App() {
  return (
    <div className="App">
      <Calculator/>
      <History/>
    </div>
  );
}

export default App;
