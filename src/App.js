import React from 'react';

import { Header } from './components';
import { Home } from './pages';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Route path="/" render={() => <Home />} exact />
			</div>
		</div>
	);
}

export default App;
