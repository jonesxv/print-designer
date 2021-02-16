import React from 'react';
import DesignMap from '../config/DesignMap';

const SVG = ({ name }) => {
  const svg = DesignMap[name];
  console.log(svg);
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