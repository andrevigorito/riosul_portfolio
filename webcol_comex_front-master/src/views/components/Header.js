import React, {Component} from 'react'
import {
	Route,
	Link
} from 'react-router-dom'

import logo from '../../img/logo.png';
import imgUser from '../../img/user-header.png'

class Header extends Component {

	btnMenu = () =>{
		let menu = document.querySelector('.main-menu')
		menu.classList.add("ativo")
	}

    render(){
        return(
            <header className="main-header">
				<div className="center">
					<div className="logo">
						<img src={logo} alt="" />
					</div>
					<nav className="main-nav">
						<Route>
							<Link to="/dashboard">Dashboard</Link>
							<Link to="/relatorios">Relatório </Link>
							<Link to="/import">Import</Link>
						</Route>
					</nav>
					<div className="user-header">
						<img src={imgUser} className="logo" alt="" />
						<div className="icon-menu" onClick={this.btnMenu}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</header>
        )
    }
}

export default Header;