import React, { useContext } from 'react';
import { store } from '../context';
import DesignMap from '../config/DesignMap';
import ColorSelector from './ColorSelector';
import IMG from './IMG';
import Button from '@material-ui/core/Button';
import logoPositions from '../styles/logoPositions';
import items from '../constants/items';

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
  const style = items.find(item => item.id === shirtType).style;
  console.log(logoPositions.tank1, style);
  const twoColor = DesignMap[designName] ? DesignMap[designName].twoColor : null;
  return (
    <>
      <div className="step-header">
        <h3 className="step-title">Click to change design colors</h3>
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
      </div>
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
      <div className="image-wrapper">
        <div className={'image-container'}>
          <IMG className={'bg-image'} name={`product/${shirtType}-${fabColor}-F`} />
          {
            designName
            && <SVG
              style={style}
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
            {
              twoColor
              ? <li><b>Color 2:</b> {color2}</li>
              : null
            }
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImageContainer;