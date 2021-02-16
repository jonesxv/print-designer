import React, { useContext } from 'react';
import StepWizard from 'react-step-wizard';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import items from '../constants/items';
import IMG from './IMG';
import DesignMap from '../config/DesignMap';
import { store } from '../context';
import ImageContainer from './ImageContainer';
import designs from '../constants/designs';

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
      {
        selected
        && <Button
          variant="contained"
          color="primary"
          onClick={nextStep}
          className={'next-button'}
        >
          CHOOSE YOUR COLOR
        </Button>
      }
    </div>
  )
}

const SelectStyle = (props) => {
  const { nextStep, isActive, previousStep } = props;
  const { shirtType } = useContext(store);
  if (isActive) {
    return (
      <>
        <h2>Choose your shirt type</h2>
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
      </>
    )
  }
  return null;
}

const SelectColor = ({ nextStep, previousStep, isActive }) => {
  const { setFabColor, shirtType, fabColor } = useContext(store);
  const item = items.find(item => item.id === shirtType);
  // const selectedColor = fabColor ? fabColor : item ? item.defaultItem : '';
  const selectedColor = item
    ? item.colors.find(color => color.name === fabColor)
    : undefined;
  const colorName = selectedColor ? selectedColor.desc : item ? item.defaultItem.desc : '';
  const handleClick = (color) => {
    setFabColor(color);
  }
  if (isActive) {
    return (
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
                <h3>SELECT A COLOR</h3>
                <span><b>Color:</b> {selectedColor ? selectedColor.desc : null}</span>
                <div className="swatches two-col">
                  {
                    item.colors.map(color => {
                      return (
                        <div
                          className="swatch"
                          onClick={() => handleClick(color.name)}
                        >
                          <IMG name={`swatches/${color.swatch}`}/>
                        </div>
                      )
                    })
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
            </>
        }
      </div>
    )
  }
  return null;
}

const SelectDesign = ({ nextStep }) => {
  const { color1, color2, designName, setDesignName } = useContext(store);
  return (
    <>
      <div className="cards">
        {
          designs.map(design => {
            const SVG = DesignMap[design.name];
            return (
              <div
                className={`card design`}
                onClick={() => setDesignName(design.name)}
              >
                <SVG
                  bg={'none'}
                  name={design.name}
                  color1={color1}
                  color2={color2}
                />
              </div>
            )}
          )
        }
      </div>
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
    </>
  );
};

const DesignWizard = () => {
  return (
    <StepWizard>
      <SelectDesign/>
      <SelectStyle/>
      <SelectColor/>
      <ImageContainer/>
    </StepWizard>
  );
};

export default DesignWizard;