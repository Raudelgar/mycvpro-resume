import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { renderWithContext } from 'setupTests';
import ThemeComponent from 'components/icons/ThemeComponent';
import MessagesComponent from 'components/icons/MessagesComponent';
import {EmailContext} from 'context/EmailContext';
import CopyLinkComponent from 'components/icons/CopyLinkComponent';

describe('Setting Menu Component', () => {
	describe('Theme Menu Button', () => {
		it('should change the theme on click', () => {
			render(renderWithContext(<ThemeComponent />));
			fireEvent.click(screen.getByTestId('btn-theme'));
			//default theme is dark
			expect(screen.getByTestId('btn-theme')).toHaveClass('light-content-icon');

			fireEvent.click(screen.getByTestId('btn-theme'));
			expect(screen.getByTestId('btn-theme')).toHaveClass('dark-content-icon');
		});
	});
	describe('Messages Menu Button', () => {
		it('should called open email on click', () => {
			const mockEmailContext = {
				openEmailForm: jest.fn()
			}
			render(renderWithContext(<EmailContext.Provider value={mockEmailContext}><MessagesComponent /></EmailContext.Provider>));
			fireEvent.click(screen.getByTestId('btn-messages-form'));
			expect(mockEmailContext.openEmailForm).toHaveBeenCalled();
		});
	});
	describe('Copy To Clipboard Menu Button', () => {
		it('should called copyToClipBoard on click', () => {
			document.execCommand = jest.fn();
			render(renderWithContext(<CopyLinkComponent />));
			fireEvent.click(screen.getByTestId('cp-link'));
			expect(document.execCommand).toHaveBeenCalledWith('copy');
		});
	});
});
