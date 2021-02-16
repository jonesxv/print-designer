import React from 'react';
import './App.css';
import DesignWizard from './components/DesignWizard';
import ImageContainer from './components/ImageContainer';
import { AppConsumer } from './context';

function App() {
  return (
    <div className="App">
      <DesignWizard/>
    </div>
  );
}

export default App;
