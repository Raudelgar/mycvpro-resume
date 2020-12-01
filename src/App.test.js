import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderWithContext } from 'setupTests';
import App from './App';

describe('App Component', () => {
	it('App should render without crash', () => {
		render(renderWithContext(<App />));

		expect(screen.getByTestId('cvapp')).toBeInTheDocument();
	});
});
