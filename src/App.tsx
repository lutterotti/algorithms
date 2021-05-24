import React from 'react';
import '../src/styles/mainStyles.scss';
import DisplayQueue from './components/DisplayQueue';
import { GenerateQueueOptions } from './components/GenerateQueueOptions';
import SelectAlgorithm from './components/SelectAlgorithm';

function App() {
  return (
    <div className="app">
      <SelectAlgorithm></SelectAlgorithm>
      <GenerateQueueOptions></GenerateQueueOptions>
      <DisplayQueue></DisplayQueue>
    </div>
  );
}

export default App;
