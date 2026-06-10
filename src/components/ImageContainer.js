import React, {useContext, useState} from 'react';
import { store } from '../context';
import DesignMap from '../config/DesignMap';
import ColorSelector from './ColorSelector';
import IMG from './IMG';
import Button from '@material-ui/core/Button';
import items from '../constants/items';
import {MenuItem, Modal, TextareaAutosize, TextField} from "@material-ui/core";
import emailjs from '@emailjs/browser';
import { shouldSendOrderEmail } from '../lib/submissionMode';

const DEFAULT_COLOR_ONE = '#000000';
const DEFAULT_COLOR_TWO_OPTIONS = ['#a71e31', '#a71930'];

const normalizeColor = (color = '') => color.toLowerCase();

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

const ImageContainer = ({ previousStep, nextStep }) => {
  const {
    color1,
    color2,
    designName,
    name,
    fabColor,
    setColorOne,
    setColorTwo,
    setName,
    setSize,
    shirtType,
    size
  } = useContext(store);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomizationReminderOpen, setIsCustomizationReminderOpen] = useState(false);
  const [note, setNote] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const SVG = designName ? DesignMap[designName].component : null;
  const item = items.find(item => item.id === shirtType);
  const style = item.style;
  const twoColor = DesignMap[designName] ? DesignMap[designName].twoColor : null;
  const canSubmit = Boolean(name.trim()) && Boolean(size) && !isSubmitting;
  const designColorsAreDefault =
    normalizeColor(color1) === DEFAULT_COLOR_ONE &&
    (!twoColor || DEFAULT_COLOR_TWO_OPTIONS.includes(normalizeColor(color2)));

  const openSubmitModal = () => {
    setIsCustomizationReminderOpen(false);
    setIsModalOpen(true);
  };

  const handleSubmitDesignClick = () => {
    if (designColorsAreDefault) {
      setIsCustomizationReminderOpen(true);
      return;
    }

    openSubmitModal();
  };

  const sendOrder = async (e) => {
    e.preventDefault();
    if (!canSubmit) {
      return;
    }
    setIsSubmitting(true);
    try {
      const orderDetails = {
        name: name.trim(),
        size,
        designName,
        shirtType,
        fabColor,
        color1,
        color2,
        note,
      };

      if (shouldSendOrderEmail()) {
        await emailjs.send('service_7l78e8l', 'template_wbc4wbj', orderDetails, 'shxabz8cS2_HJJoaB');
      }

      setSuccess(true);
    } catch (error) {
      console.log(error.text);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="step-header">
        <h3 className="step-title">Customize design colors</h3>
        <p className="step-helper">Make the graphic yours.</p>
        <StepBackLink href="#color-step" onClick={previousStep}>
          Previous
        </StepBackLink>
      </div>
      <div className="preview-workspace preview-composer" data-testid="preview-composer">
        <div className="image-wrapper preview-shirt-panel">
          <div
            className={'image-container'}
          >
            <SVG
              data-html2canvas-ignore={false}
              style={style}
              className={'design-image'}
              bg={'none'}
              color1={color1}
              color2={color2}
            />
            <IMG className={'bg-image'} name={`product/${shirtType}-${fabColor}-F`} />
          </div>
        </div>
        <div className="preview-controls">
          <div className="customize-cta" data-testid="customize-cta">
            <div className="customize-cta-copy">
              <p className="customize-eyebrow">Make the graphic yours</p>
              <p className="customize-body">Pick graphic colors that match your personal style.</p>
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
          </div>
          <div className="image-details">
            <Button
              disabled={isSubmitting}
              color="primary"
              onClick={handleSubmitDesignClick}
              variant="contained"
            >
              Submit Design
            </Button>
          </div>
        </div>
      </div>
      <div className="image-details">
        <Modal
          onBackdropClick={() => setIsCustomizationReminderOpen(false)}
          open={isCustomizationReminderOpen}>
          <div className="submit-modal customization-reminder-modal">
            <p className="submit-modal-eyebrow">Make the graphic yours</p>
            <h2>Customize your graphic colors</h2>
            <p>Your design is still using the starter colors. You can adjust the graphic colors now, or continue to submit if this look is right.</p>
            <div className="buttons">
              <Button
                color="primary"
                margin="normal"
                onClick={() => setIsCustomizationReminderOpen(false)}
                type="button"
                variant="outlined"
              >
                Customize colors
              </Button>
              <Button
                color="primary"
                margin="normal"
                onClick={openSubmitModal}
                type="button"
                variant="contained"
              >
                Continue to submit
              </Button>
            </div>
          </div>
        </Modal>
        <Modal
          onBackdropClick={() => setIsModalOpen(false)}
          open={isModalOpen}>
          <form className="submit-modal submit-design-modal" data-testid="submit-design-modal" onSubmit={sendOrder}>
            {
              success
                ? (
                  <div className="submit-success">
                    <p className="submit-modal-eyebrow">Design sent</p>
                    <h2>Your design was successfully submitted</h2>
                    <p>An email was sent to <b>phoenixbeachvb@gmail.com</b> with your order.</p>
                    <Button
                      color="primary"
                      margin="normal"
                      onClick={() => setIsModalOpen(false)}
                      variant="contained"
                    >
                      OK
                    </Button>
                  </div>
                )
                : <>
                  <div className="submit-modal-header">
                    <p className="submit-modal-eyebrow">Almost ready</p>
                    <h2>Submit your design</h2>
                    <p>Tell us who this design is for, then review the selections before sending.</p>
                  </div>
                  <div className="submit-details">
                    <TextField
                      id="customer-name"
                      required
                      onChange={(e) => setName(e.currentTarget.value)}
                      label="Your Full Name"
                      margin="normal"
                      value={name}
                      variant="outlined"
                    />
                    <TextField
                      id="shirt-size"
                      required
                      select
                      onChange={(e) => setSize(e.target.value)}
                      label="Shirt Size"
                      margin="normal"
                      value={size}
                      variant="outlined"
                    >
                      {item.sizes.map(itemSize => (
                        <MenuItem key={itemSize} value={itemSize}>
                          {itemSize}
                        </MenuItem>
                      ))}
                    </TextField>
                  </div>
                  <div className="submit-summary">
                    <section className="submit-summary-card">
                      <h3>Your selections</h3>
                      <dl>
                        <div>
                          <dt>Design</dt>
                          <dd>{DesignMap[designName] ? DesignMap[designName].desc : null}</dd>
                        </div>
                        <div>
                          <dt>Shirt</dt>
                          <dd>{item.name}</dd>
                        </div>
                        <div>
                          <dt>Shirt color</dt>
                          <dd>{fabColor}</dd>
                        </div>
                      </dl>
                    </section>
                    <section className="submit-summary-card">
                      <h3>Graphic colors</h3>
                      <dl>
                        <div className="summary-color-row">
                          <dt>Color 1</dt>
                          <dd>
                            <span className="summary-color-swatch" style={{ backgroundColor: color1 }} />
                            <span className="summary-color-value">{color1}</span>
                          </dd>
                        </div>
                        {
                          twoColor
                            ? (
                              <div className="summary-color-row">
                                <dt>Color 2</dt>
                                <dd>
                                  <span className="summary-color-swatch" style={{ backgroundColor: color2 }} />
                                  <span className="summary-color-value">{color2}</span>
                                </dd>
                              </div>
                            )
                            : null
                        }
                      </dl>
                    </section>
                  </div>
                  <label className="submit-note-field">
                    <span>Optional note</span>
                    <TextareaAutosize
                      rowsMin={3}
                      onChange={e => setNote(e.target.value)}
                      placeholder="Anything we should know about this design?"
                      value={note}
                    />
                  </label>
                  <div className="buttons">
                    <Button
                      color="primary"
                      margin="normal"
                      onClick={() => setIsModalOpen(false)}
                      type="button"
                      variant="outlined"
                    >
                      Cancel
                    </Button>
                    <Button
                      color="primary"
                      disabled={!canSubmit}
                      margin="normal"
                      variant="contained"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </>
            }
          </form>
        </Modal>
      </div>
    </>
  );
};

export default ImageContainer;
