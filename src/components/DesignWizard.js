import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import items from '../constants/items';
import IMG from './IMG';
import DesignMap from '../config/DesignMap';
import { store } from '../context';
import ImageContainer from './ImageContainer';

const ItemCard = ({ nextStep, item }) => {
  const { setShirtType, shirtType } = useContext(store);
  const handleClick = (id) => {
    setShirtType(id);
    // nextStep();
  }
  const selected = shirtType === item.id;
  return (
    <div
      className={`card${selected ? ' selected' : ''}`}
      onClick={() => handleClick(item.id)}
    >
      <IMG
        name={`product/${item.id}-${item.defaultItem.name}-F`}
      />
      <Typography>
        {item.name}
      </Typography>
    </div>
  )
}

const SelectStyle = (props) => {
  const { nextStep, previousStep } = props;
  const { shirtType } = useContext(store);
  return (
    <>
      <div className="step-header">
        <h2 className="step-title">Choose your shirt</h2>
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
            disabled={!shirtType}
          >
            NEXT
          </Button>
        </div>
      </div>
      <div className="cards">
        {
          items.map((item, idx) => (
            <ItemCard
              key={`${item.name}-${idx}`}
              nextStep={nextStep}
              item={item}
            />
          ))
        }
      </div>
    </>
  )
}

const SelectColor = ({ nextStep, previousStep }) => {
  const { setFabColor, shirtType, fabColor } = useContext(store);
  const item = items.find(item => item.id === shirtType);
  // const selectedColor = fabColor ? fabColor : item ? item.defaultItem : '';
  const selectedColor = item
    ? item.colors.find(color => color.name === fabColor)
    : undefined;
  const handleClick = (color) => {
    setFabColor(color);
  }
  return (
    <>
      <div className="step-header">
        <h3 className="step-title">SELECT A COLOR</h3>
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
            disabled={!selectedColor}
          >
            NEXT
          </Button>
        </div>
      </div>
    <div className="select-color">
      {
        item
          && <>
            <div className="shirt-image two-col">
              <IMG
                name={`product/${item.id}-${selectedColor ? selectedColor.name : item.defaultItem.name}-F`}
              />
            </div>
            <div className="right-col">
              <span><b>Color:</b> {selectedColor ? selectedColor.desc : 'NONE SELECTED'}</span>
              <div className="swatches two-col">
                {
                  item.colors.map(color => {
                    const selectedSwatch = selectedColor ? (color.name === selectedColor.name ? ' selected' : '') : '';
                    return (
                      <div
                        className={`swatch${selectedSwatch}`}
                        onClick={() => handleClick(color.name)}
                      >
                        <IMG name={`swatches/${color.swatch}`}/>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </>
      }
    </div>
    </>
  )
}

const SelectDesign = ({ nextStep }) => {
  const { color1, color2, designName, setDesignName } = useContext(store);
  return (
    <>
      <div className="step-header">
        <h2 className="step-title">Choose a design</h2>
        <div className="buttons">
          <Button
            onClick={nextStep}
            variant="contained"
            color="primary"
            disabled={!designName}
          >
            NEXT
          </Button>
        </div>
      </div>
      <div className="cards">
        {
          Object.keys(DesignMap).map((design, idx) => {
            const SVG = DesignMap[design].component;
            const selected = designName === design ? ' selected' : null;
            return (
              <div
                key={`design${idx}`}
                className={`card design ${selected}`}
                onClick={() => setDesignName(design)}
              >
                <SVG
                  bg={'none'}
                  name={design}
                  color1={color1}
                  color2={color2}
                />
              </div>
            )}
          )
        }
      </div>
    </>
  );
};

const steps = [
  SelectDesign,
  SelectStyle,
  SelectColor,
  ImageContainer,
]

const DesignWizard = () => {
  const [step, setStep] = useState(0);
  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => {
    if (step !== 0) {
      setStep(step - 1);
    }
  }
  const CurrentStep = steps[step];
  return (
    <CurrentStep
      nextStep={handleNext}
      previousStep={handlePrevious}
    />
  );
};

export default DesignWizard;