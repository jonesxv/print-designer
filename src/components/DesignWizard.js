import React from 'react';
import StepWizard from 'react-step-wizard';
// import { AppConsumer } from '../context';
import items from '../constants/items';

const SelectStyle = () => {
  return (
    <>
      {
        items.map(item => (
          <p key={item.id}>{item.name}</p>
        ))
      }
      </>
  )
}

const DesignWizard = () => {
  return (
    <StepWizard>
      <SelectStyle/>
      <p>steppp</p>
    </StepWizard>
  );
};

export default DesignWizard;