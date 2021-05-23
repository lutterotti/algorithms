import React from 'react';
import '../src/styles/mainStyles.scss';
import DisplayQueue from './components/DisplayQueue';
import SelectAlgorithm from './components/SelectAlgorithm';

function App() {
  return (
    <div className="app">
      <SelectAlgorithm></SelectAlgorithm>
      <DisplayQueue></DisplayQueue>
    </div>
  );
}

export default App;
