import React, { useState } from 'react';
import Form from './Form.js';

function App() {
	const [info, setInfo] = useState({ name: '', email: '' });
	const [error, setError] = useState('');
	const Admin = { email: '123@456.com', password: 'xiaotian' };

	const Login = (local) => {
		if (local.email == Admin.email && local.password == Admin.password) {
			setInfo({ name: local.name, email: local.email });
		} else {
			setError('info does not match');
		}
	};

	const Logout = () => {
		setInfo({ name: '', email: '' });
		setError('');
	};

	return (
		<div className='App'>
			{info.email != '' ? (
				<div className='welcome'>
					<h1>
						Welcome, <span>{info.name}</span>!
					</h1>
					<button onClick={Logout}>Log Out</button>
				</div>
			) : (
				<Form Login={Login} error={error}></Form>
			)}
		</div>
	);
}

export default App;
