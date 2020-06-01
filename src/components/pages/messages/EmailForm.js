import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';

import './form.scss';
import { EmailContext } from '../../../context/EmailContext';
import CloseBtn from '../../view/buttons/CloseBtn';

export default function EmailForm() {
	const { isOpen, cancelEmailForm, submitEmailForm } = useContext(EmailContext);
	return (
		<>
			{isOpen && (
				<div className='form-container'>
					<div className='email-form'>
						<div className='email-form-header'>
							<div className='email-header-subject'>New Messages</div>
							<CloseBtn
								styles={{ container: 'close-email', icon: 'close-icon ' }}
							/>
						</div>
						<div className='email-content'>
							<form>
								<div className='email-content-header'>
									<div className='email-content-name'>
										<label htmlFor='name'>Name</label>
										<input
											type='text'
											name='name'
											id='name'
											// placeholder='Your Name'
											required
										/>
									</div>
									<div className='email-content-name'>
										<label htmlFor='company'>Company</label>
										<input
											type='text'
											name='company'
											id='company'
											// placeholder='You work for...'
											required
										/>
									</div>
									<div className='email-content-name'>
										<label htmlFor='email'>Email</label>
										<input
											type='email'
											name='email'
											id='email'
											// placeholder='example@domain.com'
											required
										/>
									</div>
								</div>
								<textarea
									name='email-textarea'
									id='descreption'
									className='email-textarea'
								></textarea>
								<div className='email-form-footer'>
									<button type='submit' className='btn-send-email'>
										Send
									</button>
									<FaTrash className='discard-icon' />
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
