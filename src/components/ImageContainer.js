import React, { useContext } from 'react';
import { store } from '../context';
import DesignMap from '../config/DesignMap';
import { AppConsumer } from '../context';
import ColorSelector from './ColorSelector';
import IMG from './IMG';
import Button from '@material-ui/core/Button';

const ImageContainer = ({ previousStep, nextStep }) => {
  const {
    designName,
    color1,
    color2,
    setColorOne,
    setColorTwo,
    fabColor,
    shirtType,
  } = useContext(store);
  const SVG = DesignMap[designName];
  return (
    <div className="image-wrapper">
      <div className={'image-container'}>
        <IMG className={'bg-image'} name={`product/${shirtType}-${fabColor}-F`} />
        <SVG
          className={'design-image'}
          bg={'none'}
          color1={color1}
          color2={color2}
        />
        <h3 className="center">Click to change design colors</h3>
        <div className="color-selectors">
          <ColorSelector
            className="selector"
            color={color1}
            setColor={setColorOne}
          />
          <ColorSelector
            className="selector"
            color={color2}
            setColor={setColorTwo}
          />
        </div>
        <div className="buttons">
            <Button
              onClick={previousStep}
              variant="outlined"
              color="primary"
            >
              PREVIOUS
            </Button>
            <Button
              onClick={nextStep}
              variant="contained"
              color="primary"
            >
              NEXT
            </Button>
          </div>
      </div>
    </div>
  );
};

export default ImageContainer;