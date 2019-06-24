import React, {Component} from 'react'
// Images
import logoLogin from '../img/logologin.png'
// Css
import '../css/Layout/login.scss';


class Login extends Component {

    render(){
        return(
            <section className="login">
                <div className="content-login">
                    <img src={logoLogin} alt="" />
                    <div className="box-login">
                        <p className="tit">COL REPORT</p>
                        <p>Bem vindo! Digite seus dados de acesso.</p>
                        <div className="main-form">
                            <input type="text" className="first" placeholder="E-mail" />>
                            <input type="password" placeholder="Senha de Acesso" />

                            <div className="row">
                                <label for="lembrame">
                                    <input type="checkbox" id="lembrame" />
                                    Lembrar-me
                                </label>
                                    
                                <div className="esqueciminhasenha">
                                    Esqueci minha senha
                                </div>
                            </div>
                            <button>Entrar</button>
                        </div>
                    </div>
                </div>
        </section>
        )
    }
}

export default Login;