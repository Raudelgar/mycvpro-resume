import React, { useContext, useState } from 'react';
import { FaTrash } from 'react-icons/fa';

import './form.scss';
import { EmailContext } from '../../../context/EmailContext';
import CloseBtn from '../../view/buttons/CloseBtn';
import useEmailState from '../../../hooks/useEmailState';

export default function EmailForm() {
	const { isOpen, cancelEmailForm, submitEmailForm } = useContext(EmailContext);
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

	const hanldeSubmitEmail = (e) => {
		e.preventDefault();
		console.log(name, company, email, subject, content);
		handleCloseForm();
	};
	return (
		<>
			{isOpen && (
				<div className='form-container'>
					<div className='email-form'>
						<div className='email-form-header'>
							<div className='email-header-subject'>
								{subject ? subject : 'New Messages'}
							</div>
							<CloseBtn
								styles={{ container: 'close-email', icon: 'close-icon ' }}
								event={handleCloseForm}
							/>
						</div>
						<div className='email-content'>
							<form onSubmit={hanldeSubmitEmail}>
								<div className='email-content-header'>
									<div className='email-content-name'>
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
									<div className='email-content-name'>
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
									<div className='email-content-name'>
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
									<div className='email-content-name'>
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
									className='email-textarea'
									value={content}
									onChange={hanldeContent}
								></textarea>
								<div className='email-form-footer'>
									<button type='submit' className='btn-send-email'>
										Send
									</button>
									<FaTrash
										className='discard-icon'
										onClick={discardEmailContent}
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
