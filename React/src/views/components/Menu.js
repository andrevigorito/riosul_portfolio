import React, {Component} from 'react'

import {
	Route,
	Link
} from 'react-router-dom'
import imgUser from '../../img/user-header.png'
import iconLogout from '../../img/icons/icon-logout.png'
import API from '../../service/api'

class Menu extends Component {

	btnMenu = () => {
		let menu = document.querySelector('.main-menu')
		menu.classList.remove("ativo")
	}

	handleLogout(){

		API.get(`auth/logout`)
		  .then(res => {
			this.setState({ 
				isAuth: false
			 });
		})

	}

    render(){
        return(
			
            <div className="main-menu">
				<div className="scrollmenu">
					<div className="content">
						<div className="icon-menu" onClick={this.btnMenu}>
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div className="user" >
							<img src={imgUser} alt="" />
							<p>Josieli Machado</p>
							<p><small>Grupo Toniato</small></p>
						</div>
						<nav >
						<Route>
							{/* <Link to="/meuperfil">Meu Perfil</Link>    */}
							<Link to="/dashboard">Dashboard</Link>
							<Link to="/relatorios">Relatório </Link>
							<Link to="/import">Import</Link>				
				
						</Route>
						</nav>
						<div className="logout" onClick={this.handleLogout} >
							<p>Logout</p>
							<img src={iconLogout} alt="" />
						</div>
					</div>
				</div>
			</div>
        )
    }
}

export default Menu;