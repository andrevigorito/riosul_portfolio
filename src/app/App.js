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
import Operacional from './views/Operacional';

// Components
import Menu from './views/components/Menu';
import Header from './views/components/Header';

// Images

// Css
import './css/main.scss';

class App extends Component {
  state = {
    isAuth: true,
  };

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

  handleLogin = (email, passwd) => {
    API.post(
      `auth/login`,
      { username: email, password: passwd },
      { headers: { 'Content-Type': 'application/json' } }
    )
      .then(() => {
        this.setState({
          isAuth: true,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLogout = () => {
    this.setState({
      isAuth: false,
    });
  };

  render() {
    const { isAuth } = this.state;
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
              <Menu onLogout={this.handleLogout} />
              <Header />
              <button type="button" onClick={this.notify}>
                Notify !
              </button>
              <button type="button" onClick={this.notifySucess}>
                Agora vai !
              </button>
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
