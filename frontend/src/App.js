import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './routes/Login';

function App() {
	return (
		<div className="w-screen h-screen">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={
						<HelloComponent />
					} />
					<Route path="/login" element={
						<LoginComponent />
					} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

const HelloComponent = () => {
	return (
		<div>
			hiafhi
		</div>
	)
}

export default App;