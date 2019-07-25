import React, { Component } from 'react';
import API from '../../services/api';

// Images
import iconTitleAlert from '../../img/icons/title-alert.png';

// Components
import Loading from '../components/Loading';

// styles
import { Box, UserList } from './styles';

class Usuarios extends Component {
  state = {
    users: [],
    isLoading: false,
    newusername: '',
    newpassword: '',
    newadmin: false,
    addUserForm: false,
  };

  async componentDidMount() {
    this.loadUserList();
  }

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

  addUser = async () => {
    const { newusername, newpassword, newadmin } = this.state;

    const newUser = await API.post(`users`, {
      user: {
        username: newusername,
        password: newpassword,
        admin: newadmin,
      },
    });

    // console.log(newUser);

    window.location.reload();
  };

  modifyUser = () => {
    alert('abrir tela/popup de alteração');
  };

  async loadUserList() {
    // tem que buscar os USUARIOS
    this.setState({ isLoading: true });
    const users = await API.get(`users`);
    // console.log(users.data);
    this.setState({
      users: users.data,
      isLoading: false,
    });
  }

  render() {
    const {
      isLoading,
      users,
      addUserForm,
      newusername,
      newpassword,
      newadmin,
    } = this.state;
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
                    {/* <div className="item">
                      <label>Nome:</label>
                      <input
                        type="text"
                        value={name}
                        onChange={this.handleChange('name')}
                        placeholder="Nome Completo"
                        id="txtname"
                      />
                    </div> */}
                    <div className="item">
                      <label>E-mail:</label>
                      <input
                        type="email"
                        value={newusername}
                        onChange={this.handleChange('newusername')}
                        placeholder="teste@email.com.br"
                        id="txtemail"
                      />
                    </div>

                    <div className="item">
                      <label>Senha:</label>
                      <input
                        type="password"
                        value={newpassword}
                        onChange={this.handleChange('newpassword')}
                        placeholder="Senha de Acesso"
                        id="txtpassword"
                      />
                    </div>

                    <div className="nfs">
                      <label>
                        <input
                          type="checkbox"
                          name=""
                          value={newadmin}
                          onChange={this.handleChangeAdmin}
                          id="checkAdmin"
                        />
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

            <UserList>
              <div className="header">
                {/* <p>Nome</p> */}
                <p>Usuário</p>
                <p>Acesso</p>
                <p>Data Criação</p>
                <p>Alterar</p>
              </div>
              {isLoading && <Loading />}
              {users.map(usuario => (
                <div className="item" key={usuario.uuid}>
                  {/* <p className="po">{usuario.nome}</p> */}
                  <p className="username">{usuario.username}</p>
                  <p className="admin">
                    {usuario.admin ? 'Administrador' : 'Usuário'}
                  </p>
                  <p className="date">
                    {new Date(usuario.createdAt).toLocaleDateString()}
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
            </UserList>
          </div>
        </div>
      </div>
    );
  }
}

export default Usuarios;
