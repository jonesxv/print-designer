import React, { useState } from 'react'
import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color';

export const ColorSelector = ({
  color,
  setColor,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleClick = () => {
    setShowPicker(!showPicker);
  };

  const handleClose = () => {
    setShowPicker(false);
  };

  const handleChange = (_color) => {
    setColor(_color.hex);
  };

  const styles = reactCSS({
    'default': {
      color: {
        width: '50px',
        height: '30px',
        borderRadius: '2px',
        background: `${color}`,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        width: '100%',
        maxWidth: '300px',
        zIndex: '2',
        top: '150px',
        right: 'calc(50% - 190px)',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  })

  return (
    <div className="picker-wrapper">
      <div style={ styles.swatch } onClick={ handleClick }>
        <div style={ styles.color } />
      </div>
      { showPicker ? <div style={ styles.popover }>
        <div style={ styles.cover } onClick={ handleClose }/>
        <ChromePicker
          disableAlpha={true}
          color={color}
          onChange={handleChange}
        />
        <button className={'save-button'} onClick={ handleClose }>APPLY</button>
      </div> : null }

    </div>
  )
}

export default ColorSelector;