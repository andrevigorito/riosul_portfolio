import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import API from './service/api'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Views
import Detalhe from './views/Detalhe'
import Login from './views/Login'
import ProductContainer from './views/ProductContainer'
import Dashboard from './views/Dashboard'
import Import from './views/Import'
import Alertas from './views/Alertas'
import Operacional from './views/Operacional'

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
	 

	notify = () => {
		toast.error("PO Alterada cod: 0002213", {
		  position: toast.POSITION.BOTTOM_RIGHT
		});
	};

	notifySucess = () => {
		toast.success("Tudo Ok. ;)", {
		  position: toast.POSITION.BOTTOM_RIGHT
		});
	};


	handleLogin = (email,passwd) => {
		
		API.post(`auth/login`, {username: email, password: passwd}, {headers: {'Content-Type': 'application/json'}})
		  .then(res => {
		
			this.setState({ 
				isAuth: true
			 });
		}).catch(error => {
			console.log(error)
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
						<button onClick={this.notify}>Notify !</button>
						<button onClick={this.notifySucess}>Agora vai !</button>
          				<ToastContainer hideProgressBar autoClose={false} />
					</div> : 
					null}
					
					{ this.state.isAuth && <Route path="/detalhe" exact component={Detalhe} /> }
					{ this.state.isAuth && <Route path="/gerencial" exact component={ProductContainer} /> }
					{ this.state.isAuth && <Route path="/dashboard" exact component={Dashboard} /> }
					{ this.state.isAuth && <Route path="/import" exact component={Import} /> }
					{ this.state.isAuth && <Route path="/alertas" exact component={Alertas} /> }
					{ this.state.isAuth && <Route path="/operacional" exact component={Operacional} /> }
		
					{ this.state.isAuth && <Route path="/" exact component={ProductContainer} /> }
					
				</BrowserRouter>	

			</div>
		)
	}
}

export default App;
