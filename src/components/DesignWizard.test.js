import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import DesignWizard from './DesignWizard';
import { AppProvider } from '../context';

jest.mock('./IMG', () => ({ name, ...props }) => <img {...props} alt={name} />);

beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn();
});

test('selecting a design reveals the shirt section and scrolls forward', async () => {
  render(
    <AppProvider>
      <DesignWizard />
    </AppProvider>
  );

  expect(screen.queryByText(/choose your shirt/i)).not.toBeInTheDocument();

  fireEvent.click(screen.getByTestId('design-option-circleESTD'));

  expect(await screen.findByText(/choose your shirt/i)).toBeInTheDocument();
  await waitFor(() => {
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
  });
});

test('wizard uses full-height snapping sections', () => {
  render(
    <AppProvider>
      <DesignWizard />
    </AppProvider>
  );

  expect(screen.getByTestId('wizard-flow')).toHaveClass('wizard-flow');
  expect(screen.getByTestId('wizard-step-design')).toHaveClass('wizard-section');
});

test('steps include quiet guidance for the next required selection', async () => {
  render(
    <AppProvider>
      <DesignWizard />
    </AppProvider>
  );

  expect(screen.getByText(/pick a graphic/i)).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('design-option-circleESTD'));
  expect(await screen.findByText(/choose the shirt style/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /cvc crew/i }));
  expect(await screen.findByText(/choose the shirt color/i)).toBeInTheDocument();
});

test('design, shirt, and color options are accessible buttons with selected badges', async () => {
  render(
    <AppProvider>
      <DesignWizard />
    </AppProvider>
  );

  const designOption = screen.getByTestId('design-option-circleESTD');
  expect(designOption.tagName).toBe('BUTTON');

  fireEvent.click(designOption);
  expect(await screen.findByText(/choose your shirt/i)).toBeInTheDocument();
  expect(designOption).toHaveAttribute('aria-pressed', 'true');
  expect(designOption.querySelector('.selected-badge')).not.toBeNull();

  const shirtOption = screen.getByRole('button', { name: /cvc crew/i });
  expect(shirtOption).toHaveClass('item-card');
  fireEvent.click(shirtOption);
  expect(await screen.findByText(/choose the shirt color/i)).toBeInTheDocument();
  expect(shirtOption).toHaveAttribute('aria-pressed', 'true');
  expect(shirtOption.querySelector('.selected-badge')).not.toBeNull();

  const blackSwatch = screen.getByRole('button', { name: /select black/i });
  fireEvent.click(blackSwatch);
  expect(await screen.findByTestId('preview-composer')).toHaveClass('preview-composer');
  expect(screen.getByRole('button', { name: /select black/i })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('button', { name: /select black/i }).querySelector('.selected-badge')).not.toBeNull();
});

test('wizard exposes layout hooks for PHX Beach design system positioning', async () => {
  render(
    <AppProvider>
      <DesignWizard />
    </AppProvider>
  );

  expect(screen.getByTestId('wizard-step-design')).toHaveClass('wizard-section-design');

  fireEvent.click(screen.getByTestId('design-option-circleESTD'));
  await screen.findByText(/choose your shirt/i);
  fireEvent.click(screen.getByRole('button', { name: /cvc crew/i }));

  expect(await screen.findByTestId('color-layout')).toHaveClass('color-step-layout');
});

test('step preview shows available and upcoming steps', async () => {
  render(
    <AppProvider>
      <DesignWizard />
    </AppProvider>
  );

  expect(screen.getByTestId('wizard-progress-design')).toHaveAttribute('aria-current', 'step');
  expect(screen.getByTestId('wizard-progress-style')).toBeDisabled();

  fireEvent.click(screen.getByTestId('design-option-circleESTD'));

  expect(await screen.findByText(/choose your shirt/i)).toBeInTheDocument();
  expect(screen.getByTestId('wizard-progress-style')).not.toBeDisabled();
  expect(screen.getByTestId('wizard-progress-color')).toBeDisabled();
});

test('step preview visually marks selections as completed', async () => {
  render(
    <AppProvider>
      <DesignWizard />
    </AppProvider>
  );

  expect(screen.getByTestId('wizard-progress-design')).not.toHaveClass('completed');

  fireEvent.click(screen.getByTestId('design-option-circleESTD'));
  expect(await screen.findByText(/choose your shirt/i)).toBeInTheDocument();

  expect(screen.getByTestId('wizard-progress-design')).toHaveClass('completed');
  expect(screen.getByTestId('wizard-progress-design')).toHaveTextContent('✓');
  expect(screen.getByTestId('wizard-progress-style')).not.toHaveClass('completed');

  fireEvent.click(screen.getByRole('button', { name: /cvc crew/i }));
  expect(await screen.findByText(/choose a color/i)).toBeInTheDocument();

  expect(screen.getByTestId('wizard-progress-style')).toHaveClass('completed');
  expect(screen.getByTestId('wizard-progress-style')).toHaveTextContent('✓');
  expect(screen.getByTestId('wizard-progress-color')).not.toHaveClass('completed');
});

test('color step shirt preview has a non-distorting image style hook', async () => {
  render(
    <AppProvider>
      <DesignWizard />
    </AppProvider>
  );

  fireEvent.click(screen.getByTestId('design-option-circleESTD'));
  await screen.findByText(/choose your shirt/i);
  fireEvent.click(screen.getByRole('button', { name: /cvc crew/i }));

  await screen.findByText(/choose a color/i);
  const shirtImages = screen.getAllByAltText('product/6210-BLACK-F');
  expect(shirtImages[shirtImages.length - 1]).toHaveClass('color-shirt-preview');
});

test('previous controls scroll back to the prior section', async () => {
  render(
    <AppProvider>
      <DesignWizard />
    </AppProvider>
  );

  fireEvent.click(screen.getByTestId('design-option-circleESTD'));
  await screen.findByText(/choose your shirt/i);
  window.HTMLElement.prototype.scrollIntoView.mockClear();

  expect(screen.queryByRole('button', { name: /change design/i })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: /change design/i }));

  await waitFor(() => {
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
  });
});

test('previous controls close an open Coloris picker before scrolling back', async () => {
  window.Coloris = Object.assign(jest.fn(), {
    close: jest.fn(),
    setInstance: jest.fn(),
  });
  const picker = document.createElement('div');
  picker.className = 'clr-picker clr-open';
  document.body.appendChild(picker);

  render(
    <AppProvider>
      <DesignWizard />
    </AppProvider>
  );

  fireEvent.click(screen.getByTestId('design-option-circleESTD'));
  await screen.findByText(/choose your shirt/i);
  fireEvent.click(screen.getByRole('button', { name: /cvc crew/i }));
  await screen.findByText(/choose a color/i);
  fireEvent.click(screen.getByRole('button', { name: /select black/i }));
  await screen.findByTestId('preview-composer');

  fireEvent.click(screen.getByRole('link', { name: /previous/i }));

  expect(window.Coloris.close).toHaveBeenCalled();

  picker.remove();
  delete window.Coloris;
});
