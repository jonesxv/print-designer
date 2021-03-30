import React from 'react';
import './App.css';
import DesignWizard from './components/DesignWizard';

function App() {
  return (
    <div className="App">
      <div className="header">Phoenix Beach Shirt Designer</div>
      <div className="wizard-container">
        <DesignWizard/>
      </div>
    </div>
  );
}

export default App;
