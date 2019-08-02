import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { NewUsuario, BtnMostrar } from './styles';
import API from '../../services/api';

// eslint-disable-next-line react/prefer-stateless-function
class NovoUsuario extends Component {
  state = {
    newusername: '',
    newpassword: '',
    newadmin: false,
    type: 'password',
    redirect: false,
  };

  handleChange = field => e => {
    this.setState({
      [field]: e.target.value,
    });
    // console.log(this.state.newadmin);
  };

  handleChangeAdmin = () => {
    this.setState(prevState => ({
      newadmin: !prevState.newadmin,
    }));
  };

  addUser = async () => {
    const { newusername, newpassword, newadmin } = this.state;

    const newUser = await API.post(`users`, {
      user: {
        username: newusername,
        password: newpassword,
        admin: newadmin,
      },
    });
    console.log(newUser);
    this.redirect();
  };

  showHide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'text' ? 'password' : 'text'
    })
  }

  redirect = () => {
    this.setState({
      redirect: true
    })
   }

  render() {
    // eslint-disable-next-line prettier/prettier
    if(this.state.redirect) {
      return <Redirect to="/usuarios/" />
    }
    const {
      newusername,
      newpassword,
      newadmin,
    } = this.state;
    return (
      <div className="center">
        <div className="page-header">
          <h1>Novo Usuário</h1>
        </div>
        <NewUsuario>
          <form>
            <div className="item">
              <label>E-mail:</label>
              <input
                type="email"
                value={newusername}
                onChange={this.handleChange('newusername')}
                placeholder="Digite o e-mail"
                id="txtemail"
              />
            </div>
            <div className="item">
              <label>Senha:</label>
              <input
                type={this.state.type}
                value={newpassword}
                onChange={this.handleChange('newpassword')}
                placeholder="Digite a senha"
                id="txtpassword"
              />
              <BtnMostrar type="button" className={this.state.type === 'text' ? 'hide' : 'show'} onClick={this.showHide} />
            </div>
            <div className="nfs item">
              <label>
                <input
                  type="checkbox"
                  name=""
                  id="checkAdmin"
                  value={newadmin}
                  onChange={this.handleChangeAdmin}
                />
                Administrador
              </label>
            </div>
            <div className="item">
              <button type="button" onClick={this.addUser} className="btn">
                Cadastrar
              </button>
            </div>
          </form>
        </NewUsuario>
      </div>
    );
  }
}

export default NovoUsuario;