import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { renderWithContext } from 'setupTests';
import App from './App';

afterEach(cleanup);

describe('App Component', () => {
	it('App should render without crash', () => {
		const { getByTestId } = render(renderWithContext(<App />));

		expect(getByTestId('cvapp')).toBeInTheDocument();
	});
});
