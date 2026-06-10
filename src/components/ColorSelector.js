import React, { useCallback, useEffect, useRef } from 'react'
import '../vendor/coloris/coloris.min.css';

const COLORIS_SWATCHES = [
  '#000000',
  '#ffffff',
  '#a71930',
  '#c42039',
  '#0b132b',
  '#2ec4b6',
  '#f5efe6',
  '#f4a261',
  '#e9c46a',
  '#264653',
];

export const ColorSelector = ({
  color,
  setColor,
  children
}) => {
  const inputRef = useRef(null);
  const initializedRef = useRef(false);
  const loadPromiseRef = useRef(null);
  const label = String(children).replace(/:$/, '');
  const testId = `color-selector-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const inputClass = `${testId}-input`;

  const setupColoris = useCallback(() => {
    const input = inputRef.current;

    if (!input || !window.Coloris) {
      return false;
    }

    window.Coloris.setInstance(`.${inputClass}`, {
      alpha: false,
      closeButton: true,
      closeLabel: 'Apply',
      focusInput: false,
      format: 'hex',
      selectInput: false,
      swatches: COLORIS_SWATCHES,
      theme: 'polaroid',
      themeMode: 'light',
    });
    window.Coloris({
      el: input,
      wrap: false,
    });
    initializedRef.current = true;
    return true;
  }, [inputClass]);

  const ensureColoris = useCallback(() => {
    if (process.env.NODE_ENV === 'test' || window.Coloris) {
      setupColoris();
      return Promise.resolve();
    }

    if (!loadPromiseRef.current) {
      loadPromiseRef.current = import('../vendor/coloris/coloris.min.js');
    }

    return loadPromiseRef.current.then(() => {
      setupColoris();
    });
  }, [setupColoris]);

  useEffect(() => {
    const input = inputRef.current;

    if (!input) {
      return undefined;
    }

    const handleInput = (event) => {
      setColor(event.target.value);
    };
    const handleClose = () => {
      window.setTimeout(() => {
        input.blur();
      }, 0);
    };

    input.addEventListener('input', handleInput);
    input.addEventListener('close', handleClose);
    ensureColoris();

    return () => {
      input.removeEventListener('input', handleInput);
      input.removeEventListener('close', handleClose);
    };
  }, [ensureColoris, setColor]);

  const handleClick = () => {
    ensureColoris().then(() => {
      if (!inputRef.current) {
        return;
      }

      inputRef.current.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      }));
    });
  };

  return (
    <div className="picker-wrapper" data-testid={testId}>
      <div className="picker-copy">
        <span className="picker-label">{label}</span>
        <input
          aria-label={`${label} value`}
          className={`picker-value coloris-input ${inputClass}`}
          onChange={(event) => setColor(event.target.value)}
          onFocus={ensureColoris}
          ref={inputRef}
          type="text"
          value={color}
        />
      </div>
      <div className="picker-action">
        <button
          aria-label={`Change ${label}`}
          className="picker-swatch"
          onClick={handleClick}
          type="button"
          style={{ '--picker-color': color }}
        >
          <span className="picker-swatch-color" />
        </button>
      </div>

    </div>
  )
}

export default ColorSelector;
