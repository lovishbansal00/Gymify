import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup'

function App() {
	return (
		<div className="w-screen h-screen">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HelloComponent />} />
					<Route path="/login" element={<LoginComponent />} />
					<Route path="/signup" element={<SignupComponent />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

const HelloComponent = () => {
	return (
		<div>
			hi
		</div>
	)
}

export default App;