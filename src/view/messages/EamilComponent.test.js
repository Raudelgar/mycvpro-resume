import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithContext } from 'setupTests';
import {EmailContext} from 'context/EmailContext';
import EmailComponent from './EmailComponent';

describe('Email Component', () => {
	describe('Email Component not render', () => {
		it('should not be render if open value is `false`', () => {
			const mockEmailContext = {
        isOpen: false,
				openEmailForm: jest.fn()
			}
			const {container} = render(renderWithContext(<EmailContext.Provider value={mockEmailContext}><EmailComponent /></EmailContext.Provider>));
      expect(container).toBeEmpty();
		});
  });
  describe('Email Component is render', () => {
		it('should be render if open value is `true`', () => {
			const mockEmailContext = {
        isOpen: true,
				openEmailForm: jest.fn()
			}
			render(renderWithContext(<EmailContext.Provider value={mockEmailContext}><EmailComponent /></EmailContext.Provider>));
      expect(screen.getByTestId('email-form-component')).toBeInTheDocument();
		});
	});
});
