import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import items from '../constants/items';
import IMG from './IMG';
import DesignMap from '../config/DesignMap';
import { store } from '../context';
import ImageContainer from './ImageContainer';

const closeColorPicker = () => {
  if (
    typeof window !== 'undefined' &&
    window.Coloris &&
    document.querySelector('.clr-picker.clr-open')
  ) {
    window.Coloris.close();
  }
};

const scrollToRef = (ref) => {
  closeColorPicker();
  window.setTimeout(() => {
    ref.current && ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, 0);
};

const StepBackLink = ({ children, href, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <a aria-label={children} className="step-back-link" href={href} onClick={handleClick} title={children}>
      <span aria-hidden="true" className="step-back-arrow">&uarr;</span>
      <span aria-hidden="true" className="step-back-text">{children}</span>
    </a>
  );
};

const ItemCard = ({ item, onSelect }) => {
  const { fabColor, setFabColor, setShirtType, shirtType } = useContext(store);
  const handleClick = (id) => {
    setShirtType(id);
    if (fabColor && !item.colors.some(color => color.name === fabColor)) {
      setFabColor(undefined);
    }
    onSelect();
  }
  const selected = shirtType === item.id;
  return (
    <button
      aria-pressed={selected}
      className={`card item-card${selected ? ' selected' : ''}`}
      onClick={() => handleClick(item.id)}
      type="button"
    >
      {selected ? <span aria-hidden="true" className="selected-badge">✓</span> : null}
      <IMG
        name={`product/${item.id}-${item.defaultItem.name}-F`}
      />
      <Typography>
        {item.name}
      </Typography>
    </button>
  )
}

const SelectStyle = (props) => {
  const { onSelect, previousStep } = props;
  return (
    <>
      <div className="step-header">
        <h2 className="step-title">Choose your shirt</h2>
        <p className="step-helper">Choose the shirt style.</p>
        <StepBackLink href="#design-step" onClick={previousStep}>
          Change design
        </StepBackLink>
      </div>
      <div className="cards item-grid">
        {
          items.map((item, idx) => (
            <ItemCard
              key={`${item.name}-${idx}`}
              onSelect={onSelect}
              item={item}
            />
          ))
        }
      </div>
    </>
  )
}

const SelectColor = ({ onSelect, previousStep }) => {
  const { setFabColor, shirtType, fabColor } = useContext(store);
  const item = items.find(item => item.id === shirtType);
  // const selectedColor = fabColor ? fabColor : item ? item.defaultItem : '';
  const selectedColor = item
    ? item.colors.find(color => color.name === fabColor)
    : undefined;
  const handleClick = (color) => {
    setFabColor(color);
    onSelect();
  }
  return (
    <>
      <div className="step-header">
        <h3 className="step-title">Choose a color</h3>
        <p className="step-helper">Choose the shirt color.</p>
        <StepBackLink href="#shirt-step" onClick={previousStep}>
          Change shirt
        </StepBackLink>
      </div>
    <div className="select-color color-step-layout" data-testid="color-layout">
      {
        item
          && <>
            <div className="shirt-image color-preview-panel two-col">
              <IMG
                className="color-shirt-preview"
                name={`product/${item.id}-${selectedColor ? selectedColor.name : item.defaultItem.name}-F`}
              />
            </div>
            <div className="right-col color-choice-panel">
              <span><b>Color:</b> {selectedColor ? selectedColor.desc : 'NONE SELECTED'}</span>
              <div className="swatches color-swatch-grid two-col">
                {
                  item.colors.map(color => {
                    const selectedSwatch = selectedColor ? (color.name === selectedColor.name ? ' selected' : '') : '';
                    return (
                      <button
                        aria-label={`Select ${color.desc}`}
                        aria-pressed={selectedColor ? color.name === selectedColor.name : false}
                        key={color.name}
                        className={`swatch${selectedSwatch}`}
                        onClick={() => handleClick(color.name)}
                        type="button"
                      >
                        {selectedSwatch ? <span aria-hidden="true" className="selected-badge">✓</span> : null}
                        <IMG name={`swatches/${color.swatch}`}/>
                      </button>
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

const SelectDesign = ({ onSelect }) => {
  const { color1, color2, designName, setDesignName } = useContext(store);
  const handleClick = (design) => {
    setDesignName(design);
    onSelect();
  };
  return (
    <>
      <div className="step-header">
        <h2 className="step-title">Choose a design</h2>
        <p className="step-helper">Pick a graphic.</p>
      </div>
      <div className="cards design-grid">
        {
          Object.keys(DesignMap).map((design, idx) => {
            const SVG = DesignMap[design].component;
            const selected = designName === design;
            return (
              <button
                aria-label={`Select ${DesignMap[design].desc}`}
                aria-pressed={selected}
                key={`design${idx}`}
                data-testid={`design-option-${design}`}
                className={`card design design-card${selected ? ' selected' : ''}`}
                onClick={() => handleClick(design)}
                type="button"
              >
                {selected ? <span aria-hidden="true" className="selected-badge">✓</span> : null}
                <SVG
                  bg={'none'}
                  name={design}
                  color1={color1}
                  color2={color2}
                />
              </button>
            )}
          )
        }
      </div>
    </>
  );
};

const DesignWizard = () => {
  const { designName, fabColor, shirtType } = useContext(store);
  const [activeStep, setActiveStep] = useState('design');
  const flowRef = useRef(null);
  const designRef = useRef(null);
  const styleRef = useRef(null);
  const colorRef = useRef(null);
  const previewRef = useRef(null);
  const steps = [
    { id: 'design', label: 'Design', ref: designRef, available: true, completed: Boolean(designName) },
    { id: 'style', label: 'Shirt', ref: styleRef, available: Boolean(designName), completed: Boolean(shirtType) },
    { id: 'color', label: 'Color', ref: colorRef, available: Boolean(designName && shirtType), completed: Boolean(fabColor) },
    { id: 'preview', label: 'Preview', ref: previewRef, available: Boolean(designName && shirtType && fabColor), completed: false },
  ];
  const visibleSteps = steps.filter(step => step.available);

  const updateActiveStep = useCallback(() => {
    const flow = flowRef.current;
    if (!flow) {
      return;
    }

    const flowBox = flow.getBoundingClientRect();
    const mostVisibleStep = visibleSteps.reduce((current, step) => {
      if (!step.ref.current) {
        return current;
      }

      const stepBox = step.ref.current.getBoundingClientRect();
      const visibleHeight = Math.min(stepBox.bottom, flowBox.bottom) - Math.max(stepBox.top, flowBox.top);
      const score = Math.max(0, visibleHeight);
      return score > current.score ? { id: step.id, score } : current;
    }, { id: activeStep, score: -1 });

    if (mostVisibleStep.id !== activeStep) {
      if (mostVisibleStep.id !== 'preview') {
        closeColorPicker();
      }
      setActiveStep(mostVisibleStep.id);
    }
  }, [activeStep, visibleSteps]);

  useEffect(() => {
    if (!visibleSteps.some(step => step.id === activeStep)) {
      setActiveStep(visibleSteps[visibleSteps.length - 1].id);
    }
  }, [activeStep, visibleSteps]);

  return (
    <>
      <div className="wizard-progress" aria-label="Design progress">
        {steps.map((step, index) => {
          const isActive = activeStep === step.id;
          const progressClasses = [
            'wizard-progress-step',
            isActive ? 'active' : '',
            step.completed ? 'completed' : '',
          ].filter(Boolean).join(' ');

          return (
            <button
              key={step.id}
              aria-current={isActive ? 'step' : undefined}
              className={progressClasses}
              data-testid={`wizard-progress-${step.id}`}
              disabled={!step.available}
              onClick={() => scrollToRef(step.ref)}
              type="button"
            >
              <span className="wizard-progress-number">
                {step.completed ? '✓' : index + 1}
              </span>
              <span>{step.label}</span>
            </button>
          );
        })}
      </div>
      <div className="wizard-flow" data-testid="wizard-flow" onScroll={updateActiveStep} ref={flowRef}>
        <section className="wizard-section wizard-section-design" data-testid="wizard-step-design" id="design-step" ref={designRef}>
          <SelectDesign onSelect={() => scrollToRef(styleRef)} />
        </section>
        {
          designName
            ? (
              <section className="wizard-section wizard-section-style" data-testid="wizard-step-style" id="shirt-step" ref={styleRef}>
                <SelectStyle
                  onSelect={() => scrollToRef(colorRef)}
                  previousStep={() => scrollToRef(designRef)}
                />
              </section>
            )
            : null
        }
        {
          designName && shirtType
            ? (
              <section className="wizard-section wizard-section-color" data-testid="wizard-step-color" id="color-step" ref={colorRef}>
                <SelectColor
                  onSelect={() => scrollToRef(previewRef)}
                  previousStep={() => scrollToRef(styleRef)}
                />
              </section>
            )
            : null
        }
        {
          designName && shirtType && fabColor
            ? (
              <section className="wizard-section wizard-section-preview" data-testid="wizard-step-preview" id="preview-step" ref={previewRef}>
                <ImageContainer previousStep={() => scrollToRef(colorRef)} />
              </section>
            )
            : null
        }
      </div>
    </>
  );
};

export default DesignWizard;
