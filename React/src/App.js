import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


// Views
import Detalhe from './views/Detalhe'
import Login from './views/Login'
import List from './views/List'
import Dashboard from './views/Dashboard'
import Import from './views/Import'


// Images

// Css
import './css/main.scss';

class App extends Component {

	state = {
		isAuth: true,
  	}

	render(){

		return (
			<div className="App">
							
				<Router>

				
				{ !this.state.isAuth && <Route path="*" exact component={Login} /> }

				{ this.state.isAuth && <Route path="/detalhe" exact component={Detalhe} /> }
				{ this.state.isAuth && <Route path="/relatorios" exact component={List} /> }
				{ this.state.isAuth && <Route path="/dashboard" exact component={Dashboard} /> }
				{ this.state.isAuth && <Route path="/import" exact component={Import} /> }
		

				</Router>
	
	
			</div>
		)
	}
}

export default App;
