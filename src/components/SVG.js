import React from 'react';
import DesignMapping from '../Config/DesignMapping';

const SVG = ({ name }) => {
  const svg = DesignMapping[name];
  return (
    <div>
      {
        svg
        ? <svg/>
        : null
      }
    </div>
  );
};

export default SVG;