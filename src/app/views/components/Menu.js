// 52:46  error  Must use destructuring props assignment    react/destructuring-assignment
// 52:57  error  'onLogout' is missing in props validation  react/prop-types

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route, Link } from 'react-router-dom';
import imgUser from '../../img/user-header.png';
import iconLogout from '../../img/icons/icon-logout.png';

class Menu extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
  };

  btnMenu = () => {
    const menu = document.querySelector('.main-menu');
    const menulink = document.querySelector('.main-menu nav a');
    menu.classList.remove('ativo');
    menulink.classList.remove('ativo');
  };

  render() {
    const { onLogout } = this.props;

    return (
      <div className="main-menu">
        <div className="scrollmenu">
          <div className="content">
            <div className="icon-menu" onClick={this.btnMenu}>
              <span />
              <span />
              <span />
            </div>
            <div className="user">
              <img src={imgUser} alt="" />
              <p>Josieli Machado</p>
              <p>
                <small>Grupo Toniato</small>
              </p>
            </div>
            <nav>
              <Route>
                {/* <Link to="/meuperfil">Meu Perfil</Link>    */}
                <Link onClick={this.btnMenu} to="/dashboard">
                  Dashboard
                </Link>
                <Link onClick={this.btnMenu} to="/gerencial">
                  Gerencial{' '}
                </Link>
                <Link onClick={this.btnMenu} to="/operacional">
                  Operacional{' '}
                </Link>
                <Link onClick={this.btnMenu} to="/import">
                  Import
                </Link>
                <Link onClick={this.btnMenu} to="/alertas">
                  Alertas
                </Link>
              </Route>
            </nav>
            <div className="logout" onClick={onLogout}>
              <p>Logout</p>
              <img src={iconLogout} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
