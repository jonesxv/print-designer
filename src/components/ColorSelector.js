import React, { useState } from 'react'
import reactCSS from 'reactcss'
import { ChromePicker } from 'react-color'

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

  const handleChange = (color) => {
    setColor(color.hex);
  };


  const styles = reactCSS({
    'default': {
      color: {
        width: '50px',
        height: '20px',
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
        zIndex: '2',
        top: '50%',
        right: 'calc(50% - 112px)',
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
    <div>
      <div style={ styles.swatch } onClick={ handleClick }>
        <div style={ styles.color } />
      </div>
      { showPicker ? <div style={ styles.popover }>
        <div style={ styles.cover } onClick={ handleClose }/>
        <ChromePicker color={ color } onChange={ handleChange } />
        <button className={'save-button'} onClick={ handleClose }>SAVE</button>
      </div> : null }

    </div>
  )
}

export default ColorSelector;