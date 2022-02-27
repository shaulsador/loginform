import React, { useState } from 'react';

function Form({ Login, error }) {
	const [user, setUser] = useState({ name: '', email: '', password: '' });
	const submitHandler = (e) => {
		e.preventDefault();
		Login(user);
	};
	return (
		<div className='container'>
			<form onSubmit={submitHandler}>
				<h1>Please Login</h1>
				{error != '' ? <div className='error'>{error}</div> : ''}
				<div className='formGroup'>
					<label htmlFor='name'>Name: </label>
					<input
						id='name'
						type='text'
						name='Name'
						onChange={(e) => setUser({ ...user, name: e.target.value })}
						value={user.name}
					></input>
				</div>
				<div className='formGroup'>
					<label htmlFor='email'>email: </label>
					<input
						id='email'
						type='email'
						name='email'
						onChange={(e) => setUser({ ...user, email: e.target.value })}
						value={user.email}
					></input>
				</div>
				<div className='formGroup'>
					<label htmlFor='password'>Password: </label>
					<input
						id='password'
						type='password'
						name='password'
						onChange={(e) => setUser({ ...user, password: e.target.value })}
						value={user.password}
					></input>
				</div>
				<input type='submit' value='LOG IN'></input>
			</form>
			<div className='hint'>
				<p>correct login:</p>
				<p>email address: 123@456.com</p>
				<p>password: xiaotian</p>
			</div>
		</div>
	);
}

export default Form;
