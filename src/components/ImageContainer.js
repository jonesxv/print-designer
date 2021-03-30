import React, { useContext } from 'react';
import { store } from '../context';
import DesignMap from '../config/DesignMap';
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
  const SVG = designName ? DesignMap[designName].component : null;
  const twoColor = DesignMap[designName] ? DesignMap[designName].twoColor : null;
  return (
    <>
     <h3 className="step-title">Click to change design colors</h3>
        <div className="color-selectors">
          Color 1:
          <ColorSelector
            className="selector"
            color={color1}
            setColor={setColorOne}
          />
          {
            twoColor
            ? <>
              Color 2:
              <ColorSelector
                className="selector"
                color={color2}
                setColor={setColorTwo}
              />
              </>
            : null
          }
        </div>
        <div className="buttons">
            <Button
              onClick={previousStep}
              variant="outlined"
              color="primary"
            >
              PREVIOUS
            </Button>
            {/* <Button
              onClick={nextStep}
              variant="contained"
              color="primary"
            >
              NEXT
            </Button> */}
          </div>
    <div className="image-wrapper">
      <div className={'image-container'}>
        <IMG className={'bg-image'} name={`product/${shirtType}-${fabColor}-F`} />
        {
          designName
          && <SVG
            className={'design-image'}
            bg={'none'}
            color1={color1}
            color2={color2}
          />
        }
      </div>
      <div className="image-details">
        <ul>
          <li><b>Design:</b> {DesignMap[designName] ? DesignMap[designName].desc : null}</li>
          <li><b>Shirt Type:</b> {shirtType}</li>
          <li><b>Shirt Color:</b> {fabColor}</li>
          <li><b>Color 1:</b> {color1}</li>
          <li><b>Color 2:</b> {color2}</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default ImageContainer;