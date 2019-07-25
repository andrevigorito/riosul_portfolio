import React, { Component } from 'react';
// import API from '../../services/api';

// Images
import iconTitleAlert from '../../img/icons/title-alert.png';

// Components
import Loading from '../components/Loading';

// styles
import { Box } from './styles';

class Usuarios extends Component {
  state = {
    users: [
      {
        uuid: '999',
        nome: 'Teste de Oliveira freitas',
        email: 'teste@email.com.br',
        acesso: 'Administrador',
        data: '05-06-2019',
      },
    ],
    isLoading: false,
    name: '',
    email: '',
    password: '',
    addUserForm: false,
  };

  componentDidMount() {
    // tem que buscar os USUARIOS
    // this.setState({ isLoading: true });
    // API.get(`products/alerts`).then(res => {
    //   const alerts = res.data;
    //   console.log(alerts);
    //   this.setState({
    //     alerts,
    //     isLoading: false,
    //   });
    // });
  }

  handleChange = field => e => {
    this.setState({
      [field]: e.target.value,
    });
  };

  btnFilter = () => {
    this.setState(prevState => ({
      addUserForm: !prevState.addUserForm,
    }));
    // alert(this.state.addUserForm);
    // const filter = document.querySelector('.filter-box');
    // filter.classList.toggle('active');
    // const btn = document.querySelector('.btn-filter-nfs');
    // btn.classList.toggle('active');
  };

  addUser = () => {
    alert('cadastrado');
  };

  modifyUser = () => {
    alert('abrir tela/popup de alteração');
  };

  render() {
    const { isLoading, users, addUserForm } = this.state;
    return (
      <div>
        <div className="center">
          <div className="page-header">
            <h1>
              <img src={iconTitleAlert} alt="" />
              Usuários
            </h1>
            <div className="last-wrap">
              <div className="btn-filter-nfs" onClick={this.btnFilter}>
                <div className="icon-filter">
                  <span />
                  <span />
                  <span />
                </div>
                Adicionar usuário
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="row">
                <Box className={addUserForm && 'active'}>
                  {/* <Box className="active"> */}
                  <form action="">
                    <div className="item">
                      <label>Nome:</label>
                      <input
                        type="text"
                        onChange={this.handleChange('name')}
                        placeholder="Nome Completo"
                        id="txtname"
                      />
                    </div>
                    <div className="item">
                      <label>E-mail:</label>
                      <input
                        type="email"
                        onChange={this.handleChange('email')}
                        placeholder="teste@email.com.br"
                        id="txtemail"
                      />
                    </div>

                    <div className="item">
                      <label>Senha:</label>
                      <input
                        type="password"
                        onChange={this.handleChange('password')}
                        placeholder="Senha de Acesso"
                        id="txtpassword"
                      />
                    </div>

                    <div className="nfs">
                      <label>
                        <input type="checkbox" name="" id="checkAdmin" />
                        Administrador
                      </label>
                    </div>
                    <div className="item">
                      <label> &nbsp; </label>
                      <button
                        type="button"
                        onClick={this.addUser}
                        className="btn"
                      >
                        Cadastrar
                      </button>
                    </div>
                  </form>
                </Box>
              </div>
            </div>

            <div className="list-alerts">
              <div className="header">
                <p>Nome</p>
                <p>Email</p>
                <p>Acesso</p>
                <p>Data Criação</p>
                <p>Alterar</p>
              </div>
              {isLoading && <Loading />}
              {users.map(usuario => (
                <div className="item" key={usuario.uuid}>
                  <p className="po">{usuario.nome}</p>
                  <p className="po ">{usuario.email}</p>
                  <p className="po">{usuario.acesso}</p>
                  <p className="date">
                    {new Date(usuario.data).toLocaleDateString()}
                  </p>
                  <p className="alertmsg">
                    <button
                      type="button"
                      onClick={this.modifyUser}
                      className="btn alterar"
                    >
                      Alterar
                    </button>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Usuarios;
