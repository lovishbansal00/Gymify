import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home';

function App() {
	return (
		<div className="w-screen h-screen">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HelloComponent />} />
					<Route path="/login" element={<LoginComponent />} />
					<Route path="/signup" element={<SignupComponent />} />
					<Route path="/home" element={<HomeComponent />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

const HelloComponent = () => {
	return (
		<div className='flex justify-center'>
			<Link to="/home">Home</Link>
		</div>
	);
}

export default App;