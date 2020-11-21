import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from 'context/ThemeContext';
import { AlertProvider } from 'context/AlertContext';
import store from 'redux/store.js';
import { Provider } from 'react-redux';

test('renders learn react link', () => {
  render(<Provider store={store}><ThemeProvider><AlertProvider><App /></AlertProvider></ThemeProvider></Provider>);
  console.log(screen)
  const app = screen.getByTestId('cvapp');
  expect(app).toBeInTheDocument();
});
