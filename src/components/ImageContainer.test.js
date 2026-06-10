import React, { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ImageContainer from './ImageContainer';
import { store } from '../context';
import emailjs from '@emailjs/browser';

jest.mock('@emailjs/browser', () => ({
  send: jest.fn(() => Promise.resolve({ text: 'ok' })),
}));

jest.mock('./IMG', () => (props) => <img alt={props.name} />);

const renderImageContainer = ({
  initialColor1 = '#000000',
  initialColor2 = '#a71930',
} = {}) => {
  const TestProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [color1, setColorOne] = useState(initialColor1);
    const [color2, setColorTwo] = useState(initialColor2);

    return (
      <store.Provider
        value={{
          color1,
          color2,
          designName: 'circleESTD',
          fabColor: 'BLACK',
          name,
          setColorOne,
          setColorTwo,
          setName,
          setSize,
          shirtType: 6210,
          size,
        }}
      >
        {children}
      </store.Provider>
    );
  };

  render(
    <TestProvider>
      <ImageContainer previousStep={jest.fn()} />
    </TestProvider>
  );
};

test('requires customer details in the submit modal before submitting', () => {
  renderImageContainer({ initialColor1: '#2ec4b6' });

  fireEvent.click(screen.getByRole('button', { name: /submit design/i }));

  expect(screen.getByLabelText(/your full name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/shirt size/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /^submit$/i })).toBeDisabled();

  fireEvent.change(screen.getByLabelText(/your full name/i), {
    target: { value: 'Taylor Player' },
  });

  expect(screen.getByRole('button', { name: /^submit$/i })).toBeDisabled();
  expect(emailjs.send).not.toHaveBeenCalled();
});

test('explains design colors can be adjusted before submitting', () => {
  renderImageContainer();

  expect(screen.getAllByText(/make the graphic yours/i).length).toBeGreaterThan(0);
});

test('presents design color controls as a customization call to action', () => {
  renderImageContainer();

  expect(screen.getByTestId('preview-composer')).toHaveClass('preview-composer');
  expect(screen.getAllByText(/make the graphic yours/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/pick graphic colors that match your personal style/i)).toBeInTheDocument();
  expect(screen.getByTestId('customize-cta')).toHaveClass('customize-cta');
});

test('styles design color selectors as labeled swatch controls', () => {
  renderImageContainer({ initialColor1: '#2ec4b6' });

  expect(screen.getByTestId('color-selector-color-1')).toHaveClass('picker-wrapper');
  expect(screen.getByText('Color 1')).toHaveClass('picker-label');
  expect(screen.getByDisplayValue('#2ec4b6')).toHaveClass('picker-value');
  expect(screen.getByRole('button', { name: /change color 1/i })).toHaveClass('picker-swatch');
});

test('uses a Coloris input to update design colors', () => {
  renderImageContainer({ initialColor1: '#2ec4b6' });

  const colorInput = screen.getByLabelText(/color 1 value/i);

  expect(colorInput).toHaveClass('coloris-input');
  expect(colorInput).toHaveClass('color-selector-color-1-input');

  fireEvent.change(colorInput, { target: { value: '#111111' } });

  expect(screen.getByDisplayValue('#111111')).toHaveClass('picker-value');
});

test('reminds users they can customize default design colors before submitting', () => {
  renderImageContainer();

  fireEvent.click(screen.getByRole('button', { name: /submit design/i }));

  expect(screen.getByText(/customize your graphic colors/i)).toBeInTheDocument();
  expect(screen.getByText(/your design is still using the starter colors/i)).toBeInTheDocument();
  expect(screen.queryByLabelText(/your full name/i)).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /continue to submit/i }));

  expect(screen.getByLabelText(/your full name/i)).toBeInTheDocument();
});

test('opens the submit modal immediately after design colors are changed', () => {
  renderImageContainer({ initialColor1: '#2ec4b6' });

  fireEvent.click(screen.getByRole('button', { name: /submit design/i }));

  expect(screen.queryByText(/customize your graphic colors/i)).not.toBeInTheDocument();
  expect(screen.getByLabelText(/your full name/i)).toBeInTheDocument();
});

test('presents the submit modal with branded summary sections', () => {
  renderImageContainer({ initialColor1: '#2ec4b6' });

  fireEvent.click(screen.getByRole('button', { name: /submit design/i }));

  expect(screen.getByTestId('submit-design-modal')).toHaveClass('submit-design-modal');
  expect(screen.getByText(/almost ready/i)).toBeInTheDocument();
  expect(screen.getByText(/tell us who this design is for/i)).toBeInTheDocument();
  expect(screen.getByText(/your selections/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /graphic colors/i })).toBeInTheDocument();
  expect(screen.getByText(/optional note/i)).toBeInTheDocument();
  expect(screen.getAllByText('#2ec4b6').some(element => (
    element.classList.contains('summary-color-value')
  ))).toBe(true);
});

test('does not send email when submitting from localhost', async () => {
  renderImageContainer({ initialColor1: '#2ec4b6' });

  fireEvent.click(screen.getByRole('button', { name: /submit design/i }));
  fireEvent.change(screen.getByLabelText(/your full name/i), {
    target: { value: 'Taylor Player' },
  });
  fireEvent.mouseDown(screen.getByRole('button', { name: /shirt size/i }));
  fireEvent.click(screen.getByRole('option', { name: 'M' }));
  fireEvent.click(screen.getByRole('button', { name: /^submit$/i }));

  await waitFor(() => {
    expect(screen.getByText(/design was successfully submitted/i)).toBeInTheDocument();
  });
  expect(emailjs.send).not.toHaveBeenCalled();
});
