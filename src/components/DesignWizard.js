import React, { useContext } from 'react';
import StepWizard from 'react-step-wizard';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import items from '../constants/items';
import IMG from './IMG';
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
    <Button onClick={() => handleClick(item.id)}>
      <div className={`card${selected ? ' selected' : ''}`}>
        <div className="card-media">
          <IMG
            name={`product/${item.id}-${item.defaultItem.name}-F`}
          />
        </div>
        <div className="card-content">
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
      </div>
    </Button>
  )
}

const SelectStyle = ({ nextStep }) => {
  return (
    <>
      <Typography>
        <h2>Choose your shirt type</h2>
      </Typography>
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
  const colorName = selectedColor ? selectedColor.desc : item ? item.defaultItem.desc : '';
  const handleClick = (color) => {
    setFabColor(color);
  }
  console.log(colorName);
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
              <span><b>Color:</b> {selectedColor ? selectedColor.name : null}</span>
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

const DesignWizard = () => {
  return (
    <StepWizard className="step-wizard">
      <SelectStyle/>
      <SelectColor/>
      <ImageContainer/>
    </StepWizard>
  );
};

export default DesignWizard;