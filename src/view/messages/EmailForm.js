import React, { useContext, useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { FiMinus, FiMinimize2, FiMaximize2 } from 'react-icons/fi';
import { EmailContext } from 'context/EmailContext';
import CloseBtn from 'components/buttons/CloseBtn';
import { ThemeContext } from 'context/ThemeContext.js';
import { sendMessages } from 'api/services';
import { AlertContext } from 'context/AlertContext';
import SuccessMsg from 'components/alerts/SuccessMsg';
import useWindowSize from 'hooks/useWindowSize';
import './form.scss';

//TODO: Create a discard messages body btn. The action is discardEmailContent
export default function EmailForm() {
	const profile = useSelector((store) => store.profile);
	const { theme } = useContext(ThemeContext);
	const { showAlert } = useContext(AlertContext);
	const {
		miniBottom,
		miniScreen,
		cancelEmailForm,
		miniEmailBottom,
		maxEmailBottom,
		maxEmailScreen,
		miniEmailScreen,
		name,
		company,
		email,
		subject,
		content,
		handleName,
		handleCompany,
		handleEmail,
		handleSubject,
		handleContent,
		cleanUpForm,
	} = useContext(EmailContext);
	const textAreaRef = useRef(null);
	const emailModalRef = useRef(null);
	const [textAreaHeight, setTextAreaHeight] = useState('');
	const windowSize = useWindowSize();

	useEffect(() => {
		const baseHeight = emailModalRef.current.offsetHeight;
		const DIFF = 265; //header: 40px, form: 160px, margin: 20px, footer: 40px, marginBootom: 5px
		setTextAreaHeight(baseHeight - DIFF);
	}, [windowSize, miniBottom, miniScreen]);

	useEffect(() => {
		textAreaRef.current.style.height = `${textAreaHeight}px`;
	}, [textAreaHeight]);

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
			data-testid='email-form-component'
			className={`${theme}-email-form ${
				miniBottom ? `${theme}-email-form-mini` : ''
			} ${!miniScreen ? `${theme}-email-form-relative` : ''}`}
			ref={emailModalRef}
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
								onChange={handleName}
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
								onChange={handleCompany}
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
								onChange={handleEmail}
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
								onChange={handleSubject}
							/>
						</div>
					</div>
					<textarea
						ref={textAreaRef}
						name='email-textarea'
						id='descreption'
						className={`email-textarea`}
						value={content}
						onChange={handleContent}
					></textarea>
					<div className='email-form-footer'>
						<button type='submit' className='btn-send-email'>
							Send
						</button>
						<FaTrash className='discard-icon' onClick={handleCloseForm} />
					</div>
				</form>
			</div>
		</div>
	);
}
