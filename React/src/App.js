import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import API from './service/api'


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
		isAuth: false,
	  }
	  
	handleLogin = (email,passwd) => {
		
		API.post(`auth/login`, {username: email, password: passwd}, {headers: {'Content-Type': 'application/json'}})
		  .then(res => {
			
			this.setState({ 
				isAuth: true
			 });
		})
	
	}

	componentDidMount(){

		API.get(`auth/status`)
		  .then(res => {
			
			this.setState({ 
				isAuth: true
			 });
			 console.log('aqui')
		})

	}

	render(){

		return (
			<div className="App">
							
				<Router>

				
				{ !this.state.isAuth && <Route path="*" render={(props) => <Login {...props} handleLogin={this.handleLogin} />} /> }
				{ this.state.isAuth && <Route path="/" exact component={List} /> }
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
