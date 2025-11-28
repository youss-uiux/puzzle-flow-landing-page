import { render, screen } from '@testing-library/react';
import App from './App';

// Mock IntersectionObserver
beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('renders Puzzle-Flow landing page', async () => {
  render(<App />);
  const titleElement = await screen.findByText(/Assemblez vos workflows/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders navigation', async () => {
  render(<App />);
  const navElements = await screen.findAllByText(/Puzzle-Flow/i);
  expect(navElements.length).toBeGreaterThan(0);
});

test('renders features section', async () => {
  render(<App />);
  const featuresElements = await screen.findAllByText(/Fonctionnalités/i);
  expect(featuresElements.length).toBeGreaterThan(0);
});
