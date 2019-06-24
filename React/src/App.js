import React from 'react';
import {
	BrowserRouter as Router, 
	Route,
} from 'react-router-dom'


// Views
import Detalhe from './views/Detalhe'
import Login from './views/Login'
import List from './views/List'
import Dashboard from './views/Dashboard'
import Import from './views/Import'


// Images

// Css
import './css/main.scss';

function App() {

	
	return (
		<div className="App">
						
			<Router>
				
				<Route path="/detalhe" exact component={Detalhe} />
				<Route path="/relatorios" exact component={List} />
				<Route path="/" exact component={Login} />
				<Route path="/dashboard" exact component={Dashboard} />
				<Route path="/import" exact component={Import} />

			</Router>


		</div>
	);
}

export default App;
