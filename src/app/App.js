import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import io from 'socket.io-client';
import API from './services/api';
import history from './services/history';

import 'react-toastify/dist/ReactToastify.css';

// Views

import Login from './views/Login';
import Home from './views/Home';

import Usuarios from './views/Usuarios';
import NovoUsuario from './views/Usuarios/new';

// Components
import Menu from './views/components/Menu/index';
import Header from './views/components/Header/index';

// Images

// Css
import './css/main.scss';

const socket = io('https://webcol.herokuapp.com');
// para testes no localhost:
// const socket = io('http://localhost:4000/');

class App extends Component {
  state = {
    isAuth: false,
    username: '',
    useruuid: '',
    photo: '',
  };

  componentDidMount() {
    const username = localStorage.getItem('USER_USERNAME');
    const useruuid = localStorage.getItem('USER_UUID');
    const photo = localStorage.getItem('USER_PHOTO');
    if (username && useruuid) {
      this.setState({
        isAuth: true,
        username,
        useruuid,
        photo,
      });
    }

  }

  /**
   * @argument message = mensagem texto puro do toast
   * @argument linkOnClick caso preenchido com uma rota, ao clicar no toast,
   * redireciona a página para a rota informada
   */
  notifyErrorTextOnClick = (message, linkOnClick) => {
    const routeLink = !linkOnClick || linkOnClick === '' ? null : linkOnClick;
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      onClick: () => {
        if (routeLink) history.push(routeLink);
      },
    });
  };

  notifyErrorText = message => {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  handleLogin = async (email, passwd, lembrar = false) => {
    try {
      const logado = await API.post(
        `auth/login`,
        { username: email, password: passwd },
        { headers: { 'Content-Type': 'application/json' } }
      );

      console.log(logado);

    
      
      if (lembrar) {
        this.saveLocalStorage(
          logado.data.name,
          logado.data.uuid,
          logado.data.photo
        );
      }

      this.setState({
        isAuth: true,
        username: logado.data.name,
        useruuid: logado.data.uuid,
        photo: logado.data.photo,
      });
      
      window.location.reload();
      
      // console.log('logado.data', logado.data);
    } catch (err) {
      // console.log(err);
      return err.response.status;
    }
    return true;
  };

  handleLogout = () => {
    history.push('/');

    this.setState({
      isAuth: false,
    });

    window.location.reload();

    localStorage.removeItem('USER_USERNAME');
    localStorage.removeItem('USER_UUID');
    localStorage.removeItem('USER_PHOTO');
    localStorage.removeItem('USER');
  };

  /**
   * Esse método de login DEVE SER MELHORADO, pois esta solução é temporária
   * e abre brechas de segurança.
   */
  saveLocalStorage = (USERNAME, UUID, PHOTO) => {
    localStorage.setItem('USER_USERNAME', USERNAME);
    localStorage.setItem('USER_UUID', UUID);
    localStorage.setItem('USER_PHOTO', PHOTO);
  };

  /**
   * Essa função foi criada para que o `useruuid` mais recente e atualizado
   * do state seja buscado sem risco de pegar um valor vazio ou desatualizado.
   * Sem isso, ao buscar no componentDidMout, vinha vazio o state.
   */
  getUserUuidFromState = () => {
    const { useruuid } = this.state;
    return useruuid;
  };

  render() {
    const { isAuth, username, useruuid, photo } = this.state;

    return (
      <div className="App">
        <Router history={history}>
          
          <div>
            <Menu
              onLogout={this.handleLogout}
              username={username}
              empresa=""
              photo={photo}
            />
            <Header />
          </div>
  
          <Switch>
          
            <Route
              path="/login"
              exact
              render={props =>  <Login {...props} handleLogin={this.handleLogin} />}
            />
            
            <Route path="/usuarios" exact={true} component={Usuarios} />
          
            <Route path="/home" exact={true} component={Home} />
          
            <Route path="/"component={Home} />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
