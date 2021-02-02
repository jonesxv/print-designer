import React from 'react';
import DesignMap from '../config/DesignMap';
import { AppConsumer } from '../context';
import ColorSelector from './ColorSelector';
import IMG from './IMG';

const ImageContainer = () => {
  const selectedDesign = 'az1';
  const SVG = DesignMap[selectedDesign];
  return (
    <AppConsumer>
      {
        ({color1, color2, setColorOne, setColorTwo}) => (
          <div className={'image-container'}>
            <IMG className={'bg-image'} name={'3600a-royal'} />
            <SVG
              className={'design-image'}
              bg={'none'}
              color1={color1}
              color2={color2}
            >
            </SVG>
            <div className="color-selectors">
              <ColorSelector
                color={color1}
                setColor={setColorOne}
              />
              <ColorSelector
                color={color2}
                setColor={setColorTwo}
              />
            </div>
          </div>
        )
      }
    </AppConsumer>
  );
};

export default ImageContainer;