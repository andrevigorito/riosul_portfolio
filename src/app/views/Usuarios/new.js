import React, { Component } from 'react';
import Cropper from 'react-easy-crop';
import { ImagePicker } from 'react-file-picker';
import InputMask from 'react-input-mask';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Redirect } from 'react-router-dom';
import { NewUsuario, BtnMostrar } from './styles';
import API from '../../services/api';

// eslint-disable-next-line react/prefer-stateless-function
class NovoUsuario extends Component {
  state = {
    newname: '',
    newusername: '',
    newpassword: '',
    newtel: '',
    newadmin: false,
    type: 'password',
    newfoto: '',
    redirect: false,
    crop: { x: 0, y: 0 },
    aspect: 4 / 4,
  };

  onCropChange = crop => {
    this.setState({ crop });
  };

  onCropComplete = (croppedArea, croppedAreaPixels) => {
    // eslint-disable-next-line no-console
    console.log(croppedArea, croppedAreaPixels);
  };

  getPhoto = file => {
    this.setState({
      newFoto: file,
    });
    console.log('ddd')
  };

  getPhoto = file => {
    this.setState({
      newfoto: file
    });
    // console.log(this.state.newadmin);
  };


  handleChangeAdmin = () => {
    this.setState(prevState => ({
      newadmin: !prevState.newadmin,
    }));
  };

  addUser = async () => {
    const { newusername, newpassword, newadmin, newtel, newname } = this.state;

    const newUser = await API.post(`users`, {
      user: {
        username: newusername,
        name: newname,
        tel: newtel,
        password: newpassword,
        admin: newadmin,
      },
    });
    console.log(newUser);
    this.redirect();
  };

  showHide = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'text' ? 'password' : 'text',
    });
  };

  redirect = () => {
    this.setState({
      redirect: true,
    });
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.redirect) {
      return <Redirect to="/usuarios/" />;
    }
    const {
      newusername,
      newname,
      newtel,
      newpassword,
      newadmin,
      newfoto,
      crop,
      aspect,
    } = this.state;
    return (
      <div className="center">
        <div className="page-header">
          <h1>Novo Usuário</h1>
        </div>
        <NewUsuario>
          <form>
            <Grid>
              <Row>
                <Col xs={12}>
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
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <div className="item">
                    <label>Nome:</label>
                    <input
                      type="text"
                      value={newname}
                      onChange={this.handleChange('newname')}
                      placeholder="Digite o seu nome"
                      id="nu-name"
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="item">
                    <label>Telefone:</label>
                    <InputMask
                      value={newtel}
                      onChange={this.handleChange('newtel')}
                      placeholder="Digite o seu telefone"
                      mask="(99) 99999-9999"
                      maskChar=" "
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
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
                </Col>
                <Col xs={12} md={6}>
                  <div className="item">
                    <label>Senha:</label>
                    <input
                      type={this.state.type}
                      value={newpassword}
                      onChange={this.handleChange('newpassword')}
                      placeholder="Digite a senha"
                      id="txtpassword"
                    />
                    <BtnMostrar
                      type="button"
                      className={this.state.type === 'text' ? 'hide' : 'show'}
                      onClick={this.showHide}
                    />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className="item">
                    <label>Foto de perfil:</label>
                    <ImagePicker
                      extensions={['jpg', 'jpeg', 'png']}
                      dims={{
                        minWidth: 100,
                        maxWidth: 500,
                        minHeight: 100,
                        maxHeight: 500,
                      }}
                      onChange={base64 => this.getPhoto(base64)}
                      onError={errMsg => alert(errMsg)}
                    >
                      <button>Click to upload image</button>
                    </ImagePicker>
                    <input
                      type="file"
                      id="imguser"
                      value={newfoto}
                      onChange={event => this.getPhoto(event.target.files)}
                    />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={3}>
                  <div className="nfs item">
                    <label>Notificações:</label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id="notemail"
                        // value={newadmin}
                        // onChange={this.handleChangeAdmin}
                      />
                      E-mail
                    </label>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="nfs item">
                    <label>&nbsp;</label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id="notwhats"
                        // value={newadmin}
                        // onChange={this.handleChangeAdmin}
                      />
                      WhatsApp
                    </label>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="nfs item">
                    <label>&nbsp;</label>
                    <label>
                      <input
                        type="checkbox"
                        name=""
                        id="notsms"
                        // value={newadmin}
                        // onChange={this.handleChangeAdmin}
                      />
                      SMS
                    </label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className="item">
                    <button
                      type="button"
                      onClick={this.addUser}
                      className="btn"
                    >
                      Cadastrar
                    </button>
                  </div>
                </Col>
              </Row>
            </Grid>
          </form>
          <div className="boxcroped">
            <Cropper
              image={newfoto}
              crop={crop}
              aspect={aspect}
              onCropChange={this.onCropChange}
              onCropComplete={this.onCropComplete}
              onZoomChange={this.onZoomChange}
            />
          </div>
        </NewUsuario>
      </div>
    );
  }
}

export default NovoUsuario;
