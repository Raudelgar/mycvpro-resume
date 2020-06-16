import React, { useContext, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FiMinus, FiMinimize2, FiMaximize2 } from 'react-icons/fi';

import './form.scss';
import { EmailContext } from '../../../context/EmailContext';
import CloseBtn from '../../view/buttons/CloseBtn';
import useEmailState from '../../../hooks/useEmailState';
import { ThemeContext } from '../../../context/ThemeContext.js';
import { sendMessages } from '../../../api/v1/api';
import useProfileState from '../../../hooks/useProfileState';
import { AlertContext } from '../../../context/AlertContext';
import SuccessMsg from '../../alerts/SuccessMsg';

export default function EmailForm() {
	const profile = useProfileState();
	const { theme } = useContext(ThemeContext);
	const { showAlert } = useContext(AlertContext);
	const {
		miniBottom,
		miniScreen,
		cancelEmailForm,
		submitEmailForm,
		miniEmailBottom,
		maxEmailBottom,
		maxEmailScreen,
		miniEmailScreen,
	} = useContext(EmailContext);
	const {
		name,
		company,
		email,
		subject,
		content,
		hanldeName,
		hanldeCompany,
		hanldeEmail,
		hanldeSubject,
		hanldeContent,
		cleanUpForm,
		discardEmailContent,
	} = useEmailState();

	const handleCloseForm = () => {
		cleanUpForm();
		cancelEmailForm();
	};

	const hanldeSubmitEmail = async (e) => {
		e.preventDefault();
		handleCloseForm();
		try {
			const response = await sendMessages(
				name,
				company,
				email,
				subject,
				content,
				profile
			);

			if (response.messages === 'Success') {
				showAlert(
					<SuccessMsg
						msg={'Messages Sent!!'}
						styles={{
							container: 'email-alert-container',
							success: 'email-success ',
							msg: 'email-alert-msg ',
						}}
					/>
				);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			className={`${theme}-email-form ${
				miniBottom ? `${theme}-email-form-mini` : ''
			} ${!miniScreen ? `${theme}-email-form-relative` : ''}`}
		>
			<div className={`${theme}-email-form-header`}>
				<div className='email-header-subject'>
					{subject ? subject : 'New Messages'}
				</div>
				{miniBottom ? (
					<div className={`${theme}-mini-top`} onClick={maxEmailBottom}>
						<FiMinus className='mini-bottom-icon' />
					</div>
				) : (
					<div className={`${theme}-mini-bottom`} onClick={miniEmailBottom}>
						<FiMinus className='mini-bottom-icon' />
					</div>
				)}
				{miniScreen ? (
					<div className={`${theme}-mini-screen`} onClick={maxEmailScreen}>
						<FiMaximize2 className='mini-screen-icon' />
					</div>
				) : (
					<div className={`${theme}-mini-screen`} onClick={miniEmailScreen}>
						<FiMinimize2 className='mini-screen-icon' />
					</div>
				)}
				<CloseBtn
					styles={{ container: `${theme}-close-email`, icon: 'close-icon ' }}
					event={handleCloseForm}
				/>
			</div>
			<div
				className={`${theme}-email-content ${
					miniBottom ? 'email-content-none' : ''
				}`}
			>
				<form onSubmit={hanldeSubmitEmail}>
					<div className='email-content-header'>
						<div className='email-content-header-info'>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								name='name'
								id='name'
								value={name}
								onChange={hanldeName}
								required
							/>
						</div>
						<div className='email-content-header-info'>
							<label htmlFor='company'>Company</label>
							<input
								type='text'
								name='company'
								id='company'
								value={company}
								onChange={hanldeCompany}
								required
							/>
						</div>
						<div className='email-content-header-info'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								name='email'
								id='email'
								value={email}
								onChange={hanldeEmail}
								required
							/>
						</div>
						<div className='email-content-header-info'>
							<input
								className='email-subject'
								type='text'
								name='subject'
								id='subject'
								placeholder='Subject'
								value={subject}
								onChange={hanldeSubject}
							/>
						</div>
					</div>
					<textarea
						name='email-textarea'
						id='descreption'
						className={`email-textarea`}
						value={content}
						onChange={hanldeContent}
					></textarea>
					<div className='email-form-footer'>
						<button type='submit' className='btn-send-email'>
							Send
						</button>
						<FaTrash className='discard-icon' onClick={discardEmailContent} />
					</div>
				</form>
			</div>
		</div>
	);
}
