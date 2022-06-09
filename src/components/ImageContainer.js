import React, {useContext, useRef, useState} from 'react';
import { store } from '../context';
import DesignMap from '../config/DesignMap';
import ColorSelector from './ColorSelector';
import IMG from './IMG';
import Button from '@material-ui/core/Button';
import items from '../constants/items';
import {Modal, TextareaAutosize} from "@material-ui/core";
import emailjs from '@emailjs/browser';

const ImageContainer = ({ previousStep, nextStep }) => {
  const {
    color1,
    color2,
    designName,
    name,
    fabColor,
    setColorOne,
    setColorTwo,
    shirtType,
    size
  } = useContext(store);
  const shirtImageRef = useRef();
  const designImageRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [note, setNote] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const SVG = designName ? DesignMap[designName].component : null;
  const style = items.find(item => item.id === shirtType).style;
  const twoColor = DesignMap[designName] ? DesignMap[designName].twoColor : null;

  const sendOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.send('service_7l78e8l', 'template_wbc4wbj', {
      name,
      size,
      designName,
      shirtType,
      fabColor,
      color1,
      color2,
      note,
    }, 'shxabz8cS2_HJJoaB')
      .then((result) => {
        setSuccess(true);
      }, (error) => {
        console.log(error.text);
      });
    setIsSubmitting(false);
  };

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
        </div>
      </div>
      <div className="color-selectors">
        <ColorSelector
          className="selector"
          color={color1}
          setColor={setColorOne}
        >Color 1:</ColorSelector>
        {
          twoColor
          ?
            <ColorSelector
              className="selector"
              color={color2}
              setColor={setColorTwo}
            >
              Color 2:
            </ColorSelector>
          : null
        }
      </div>
      <div className="image-details">
        <Button
          disabled={isSubmitting}
          color="primary"
          onClick={() => setIsModalOpen(true)}
          variant="contained"
        >
          Submit Design
        </Button>
        <Modal
          onBackdropClick={() => setIsModalOpen(false)}
          open={isModalOpen}>
          <div className="submit-modal">
            {
              success
                ? <>
                  <h2>YOUR DESIGN WAS SUCCESSFULLY SUBMITTED</h2>
                  <p>An email was sent to <b>phoenixbeachvb@gmail.com</b> with your order</p>
                  <Button
                    color="primary"
                    margin="normal"
                    onClick={() => setIsModalOpen(false)}
                    variant="contained"
                  >
                    OK
                  </Button>
                </>
                : <>
                  <h2>SUBMIT YOUR DESIGN</h2>
                  <ul>
                    <li><b>Name:</b> {name}</li>
                    <li><b>Shirt Size:</b> {size}</li>
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
                  <TextareaAutosize
                    minRows={3}
                    onChange={e => setNote(e.target.value)}
                    placeholder="Send a note"
                    style={{margin: 10}}
                    value={note}
                  />
                  <div className="buttons">
                    <Button
                      color="primary"
                      margin="normal"
                      onClick={() => setIsModalOpen(false)}
                      variant="outlined"
                    >
                      CANCEL
                    </Button>
                    <Button
                      color="primary"
                      margin="normal"
                      variant="contained"
                      onClick={sendOrder}
                    >
                      SUBMIT
                    </Button>
                  </div>
                </>
            }
          </div>
        </Modal>

      </div>
      <div
        className="image-wrapper"
      >
        <div
          className={'image-container'}
          ref={shirtImageRef}
        >
          <SVG
            data-html2canvas-ignore={false}
            ref={designImageRef}
            style={style}
            className={'design-image'}
            bg={'none'}
            color1={color1}
            color2={color2}
          />
          <IMG className={'bg-image'} name={`product/${shirtType}-${fabColor}-F`} />
        </div>

      </div>
    </>
  );
};

export default ImageContainer;