import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import API from './service/api'


// Views
import Detalhe from './views/Detalhe'
import Login from './views/Login'
import List from './views/List'
import Dashboard from './views/Dashboard'
import Import from './views/Import'
import Alertas from './views/Alertas'

//Components
import Menu from './views/components/Menu';
import Header from './views/components/Header';


// Images

// Css
import './css/main.scss';

class App extends Component {

	state = {
		isAuth: true,
	  }
	  
	handleLogin = (email,passwd) => {
		
		API.post(`auth/login`, {username: email, password: passwd}, {headers: {'Content-Type': 'application/json'}})
		  .then(res => {
			
			this.setState({ 
				isAuth: true
			 });
		})
	
	}

	handleLogout = () => {

		
		this.setState({ 
			isAuth: false
		 });
	

	}

	render(){

		return (
			<div className="App">
			
				
			
				<BrowserRouter>			
		
					{ !this.state.isAuth && <Route path="*" render={(props) => <Login {...props} handleLogin={this.handleLogin} />} /> }
					
					{this.state.isAuth ? 
						<div><Menu onLogout={this.handleLogout} />
						<Header />
					</div> : 
					null}
					
					{ this.state.isAuth && <Route path="/detalhe" exact component={Detalhe} /> }
					{ this.state.isAuth && <Route path="/relatorios" exact component={List} /> }
					{ this.state.isAuth && <Route path="/dashboard" exact component={Dashboard} /> }
					{ this.state.isAuth && <Route path="/import" exact component={Import} /> }
					{ this.state.isAuth && <Route path="/alertas" exact component={Alertas} /> }
		
					{ this.state.isAuth && <Route path="/" exact component={List} /> }
					
				</BrowserRouter>	

			</div>
		)
	}
}

export default App;
