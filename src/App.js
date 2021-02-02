import React from 'react';
import './App.css';
import DesignWizard from './components/DesignWizard';
import ImageContainer from './components/ImageContainer';
import { AppConsumer } from './context';

function App() {
  return (
    <div className="App">
      <AppConsumer>
        {
          ({
            fabColor,
            shirtType
          }) => {
            if (fabColor && shirtType) return <ImageContainer/>
            return <DesignWizard/>
            }
          }
      </AppConsumer>
    </div>
  );
}

export default App;
