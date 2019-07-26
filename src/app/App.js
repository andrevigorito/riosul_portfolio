import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import API from './services/api';

import 'react-toastify/dist/ReactToastify.css';

// Views
import Detalhe from './views/Detalhe';
import Login from './views/Login';
import ProductContainer from './views/ProductContainer';
import Dashboard from './views/Dashboard';
import Import from './views/Import';
import Alertas from './views/Alertas';
import Usuarios from './views/Usuarios';
import Operacional from './views/Operacional';

// Components
import Menu from './views/components/Menu';
import Header from './views/components/Header';

// Images

// Css
import './css/main.scss';

class App extends Component {
  state = {
    isAuth: false,
    username: '',
  };

  componentDidMount() {
    const userStored = localStorage.getItem('USER');
    if (userStored) {
      this.setState({
        isAuth: true,
      });
    }
  }

  notify = () => {
    toast.error('PO Alterada cod: 0002213', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  notifySucess = () => {
    toast.success('Tudo Ok. ;)', {
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

      this.setState({
        isAuth: true,
        username: email,
      });

      if (lembrar) {
        this.saveLocalStorage(email, logado.data.uuid);
      }
    } catch (err) {
      console.log(err);
      return err.response.status;
    }
    return true;
  };

  handleLogout = () => {
    this.setState({
      isAuth: false,
    });
    localStorage.removeItem('USER');
  };

  saveLocalStorage = (USERNAME, UUID) => {
    localStorage.setItem('USER', {
      USERNAME,
      UUID,
    });
  };

  render() {
    const { isAuth, username } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          {!isAuth && (
            <Route
              path="*"
              render={props => (
                <Login {...props} handleLogin={this.handleLogin} />
              )}
            />
          )}

          {isAuth ? (
            <div>
              <Menu
                onLogout={this.handleLogout}
                username={username}
                empresa=""
              />
              <Header />
              <ToastContainer hideProgressBar autoClose={false} />
            </div>
          ) : null}

          {isAuth && (
            <Route path="/gerencial/:uuid" exact component={Detalhe} />
          )}
          {isAuth && (
            <Route path="/gerencial" exact component={ProductContainer} />
          )}
          {isAuth && <Route path="/dashboard" exact component={Dashboard} />}
          {isAuth && <Route path="/import" exact component={Import} />}
          {isAuth && <Route path="/alertas" exact component={Alertas} />}
          {isAuth && <Route path="/usuarios" exact component={Usuarios} />}
          {isAuth && (
            <Route path="/operacional" exact component={Operacional} />
          )}

          {isAuth && <Route path="/" exact component={Operacional} />}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
