import React, {Component} from 'react'
// Images
import logoLogin from '../img/logologin.png'
// Css
import '../css/Layout/login.scss';


class Login extends Component {

    state = {
        email: '',
        passwd: '',
       
    }

    handleChange = field => e => {
        this.setState({
            [field]: e.target.value
        })
    }

    login = () => {
        console.log(this.state.email, this.state.passwd)
    }

    render(){
        return(
            <section className="login">
                <div className="content-login">
                    <img src={logoLogin} alt="" />
                    <div className="box-login">
                        <p className="tit">COL REPORT</p>
                        <p>Bem vindo! Digite seus dados de acesso.</p>
                        <div className="main-form">
                            <input type="text" onChange={this.handleChange('email')} className="first" placeholder="E-mail" />
                            <input type="password" onChange={this.handleChange('passwd')} placeholder="Senha de Acesso" />

                            <div className="row">
                                <label for="lembrame">
                                    <input type="checkbox" id="lembrame" />
                                    Lembrar-me
                                </label>
                                    
                                <div className="esqueciminhasenha">
                                    Esqueci minha senha
                                </div>
                            </div>
                            <button onClick={this.login}>Entrar</button>
                        </div>
                    </div>
                </div>
        </section>
        )
    }
}

export default Login;