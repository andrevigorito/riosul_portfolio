import React, {Component} from 'react'
// Images
import iconRgc from '../img/icons/rg-c.png'
import iconRgp from '../img/icons/rg-p.png'
import iconTotal from '../img/icons/total.png'
import iconTitleDash from '../img/icons/title-dash.png'
import iconUser from '../img/user-header.png'
import iconRemetente from '../img/icons/icon-nf-remetente.png'
import iconMap from '../img/icons/icon-nf-map.png'
import iconBarco from '../img/icons/icon-barco.png'
import iconAir from '../img/icons/icon-air.png'

// Components
import Menu from './components/Menu';
import Header from './components/Header';

    

class Detalhe extends Component {


    componentDidMount(){
        let acc = document.getElementsByClassName("accordion");
        let i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                let panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                panel.style.maxHeight = null;
                } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                } 
            });
        }
    }
	
    render(){
        return(

            <div>
                <Menu />
				<Header />

                <div className="center">
                    <div className="page-header">
                        <h1>
                            <img src={iconTitleDash} alt="" />
                            Relatório Gerencial
                        </h1>
                    </div>

                    <div className="content-regerencial">
                        <div className="page-interna">
                            <header className="title">
                                <div className="first">
                                    <p>ID: <strong>D13319661</strong></p>
                                    <p>Produto: <strong>APROACH PRIMA 5L</strong></p>
                                </div>
                                <div className="last">
                                    <p className="emp">Dupont</p>
                                </div>
                            </header>

                            <div className="boxgra">
                                <div className="first">
                                    <div className="tit">
                                        <img src={iconTitleDash} alt=""/>
                                        <p>GR Atual</p>
                                    </div>
                                    <div className="item-gra">
                                        <p><img src={iconRgc} alt=""  /> 30/05/2019</p>
                                        <p><img src={iconRgp} alt="" /> 43.200</p>
                                    </div>
                                    <div className="item-gra">
                                        <p className="alterada"><img src={iconRgc} alt=""  /> 03/06/2019</p>
                                        <p><img src={iconRgp} alt="" /> 10.800</p>
                                    </div>
                                    <div className="item-gra">
                                        <p><img src={iconRgc} alt=""  /> 07/06/2019</p>
                                        <p><img src={iconRgp} alt="" /> 75.000</p>
                                    </div>
                                </div>
                                <div className="total">
                                    <img src={iconTotal} alt=""/>
                                    <p>Total: <strong>129.000</strong></p>
                                </div>
                            </div>
                            
                            <div className="list-po">
                                <div className="header">
                                    <p className="w60">PO</p>
                                    <p className="w20">Qtd.</p>
                                    <p className="w20">Valor</p>
                                </div>

                                <div className="item accordion" >
                                    <p className="w60">4100004249</p>
                                    <p className="w20">58.320,00</p>
                                    <p className="w20">1.341.360,00</p>
                                </div>
                                <div className="panel">
                                    <div className="content-po ">
                                        <header>
                                            <div className="gra">
                                                <p>GR Atual</p>
                                                <p >30/03/2019</p>
                                            </div>
                                            <div className="historico">
                                                <div className="hist-tit">
                                                    <p>Último Histórico</p>
                                                    <p className="date">08/04/2019</p>
                                                </div>
                                                <div className="boll">
                                                    <span></span>
                                                </div>
                                                <div className="infouser">
                                                    <img src={iconUser} alt="" />
                                                    <div className="info">
                                                        <p className="user">Roberta Beltran</p>
                                                        <p>Processo protocolado no MAPA - IN 26 12/03/2019</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </header>
                                        <div className="boxs">
                                            <div className="box">
                                                <div className="icon">
                                                    <img src={iconRemetente} alt="" />
                                                </div>
                                                <div className="info">
                                                    <div className="row">
                                                        <p>Item:</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>QTD. Produto:</p>
                                                        <p>19.400,00</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>QTD. Container:</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Peso:</p>
                                                        <p>19.400,00 KG</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="icon">
                                                    <img src={iconMap} alt="" />
                                                </div>
                                                <div className="info">
                                                    <div className="row">
                                                        <p>Origem:</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Destino:</p>
                                                        <p>AVENIDA CONSTANTE PAVAN 4327 PAULINIA</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Transportador:</p>
                                                        <p>Transporte Toniato</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="icon">
                                                    <img src={iconBarco} alt="" />
                                                </div>
                                                <div className="info">
                                                    <div className="row">
                                                        <p>ETD - Prev. Embarque:</p>
                                                        <p>22/02/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>ATD - Real. Embarque:</p>
                                                        <p>24/02/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>ETA - Prev. Entrega:</p>
                                                        <p>13/03/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>ATA - Real. Entrega:</p>
                                                        <p>10/03/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Entrega na Planta:</p>
                                                        <p>29/03/2019</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                <div className="item accordion" >
                                    <p className="w60">4100004249</p>
                                    <p className="w20">58.320,00</p>
                                    <p className="w20">1.341.360,00</p>
                                </div>
                                <div className="panel">
                                    <div className="content-po ">
                                        <header>
                                            <div className="gra">
                                                <p>GR Atual</p>
                                                <p>30/03/2019</p>
                                            </div>
                                            <div className="historico">
                                                <div className="hist-tit">
                                                    <p>Último Histórico</p>
                                                    <p className="date">08/04/2019</p>
                                                </div>
                                                <div className="boll">
                                                    <span></span>
                                                </div>
                                                <div className="infouser">
                                                    <img src={iconUser} alt="" />
                                                    <div className="info">
                                                        <p className="user">Roberta Beltran</p>
                                                        <p>Processo protocolado no MAPA - IN 26 12/03/2019</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </header>
                                        <div className="boxs">
                                            <div className="box">
                                                <div className="icon">
                                                    <img src={iconRemetente} alt="" />
                                                </div>
                                                <div className="info">
                                                    <div className="row">
                                                        <p>Item:</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>QTD. Produto:</p>
                                                        <p>19.400,00</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>QTD. Container:</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Peso:</p>
                                                        <p>19.400,00 KG</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="icon">
                                                    <img src={iconMap} alt="" />
                                                </div>
                                                <div className="info">
                                                    <div className="row">
                                                        <p>Origem:</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Destino:</p>
                                                        <p>AVENIDA CONSTANTE PAVAN 4327 PAULINIA</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Transportador:</p>
                                                        <p>Transporte Toniato</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="icon">
                                                    <img src={iconAir} alt="" />
                                                </div>
                                                <div className="info">
                                                    <div className="row">
                                                        <p>ETD - Prev. Embarque:</p>
                                                        <p>22/02/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>ATD - Real. Embarque:</p>
                                                        <p>24/02/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>ETA - Prev. Entrega:</p>
                                                        <p>13/03/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>ATA - Real. Entrega:</p>
                                                        <p>10/03/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Entrega na Planta:</p>
                                                        <p>29/03/2019</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            
                                <div className="item accordion" >
                                    <p className="w60">4100004249</p>
                                    <p className="w20">58.320,00</p>
                                    <p className="w20">1.341.360,00</p>
                                </div>
                                <div className="panel">
                                    <div className="content-po ">
                                        <header>
                                            <div className="gra">
                                                <p>GR Atual</p>
                                                <p>30/03/2019</p>
                                            </div>
                                            <div className="historico">
                                                <div className="hist-tit">
                                                    <p>Último Histórico</p>
                                                    <p className="date">08/04/2019</p>
                                                </div>
                                                <div className="boll">
                                                    <span></span>
                                                </div>
                                                <div className="infouser">
                                                    <img src={iconUser} alt="" />
                                                    <div className="info">
                                                        <p className="user">Roberta Beltran</p>
                                                        <p>Processo protocolado no MAPA - IN 26 12/03/2019</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </header>
                                        <div className="boxs">
                                            <div className="box">
                                                <div className="icon">
                                                    <img src={iconRemetente} alt="" />
                                                </div>
                                                <div className="info">
                                                    <div className="row">
                                                        <p>Item:</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>QTD. Produto:</p>
                                                        <p>19.400,00</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>QTD. Container:</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Peso:</p>
                                                        <p>19.400,00 KG</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="icon">
                                                    <img src={iconMap} alt="" />
                                                </div>
                                                <div className="info">
                                                    <div className="row">
                                                        <p>Origem:</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Destino:</p>
                                                        <p>AVENIDA CONSTANTE PAVAN 4327 PAULINIA</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Transportador:</p>
                                                        <p>Transporte Toniato</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="icon">
                                                    <img src={iconAir} alt="" />
                                                </div>
                                                <div className="info">
                                                    <div className="row">
                                                        <p>ETD - Prev. Embarque:</p>
                                                        <p>22/02/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>ATD - Real. Embarque:</p>
                                                        <p>24/02/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>ETA - Prev. Entrega:</p>
                                                        <p>13/03/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>ATA - Real. Entrega:</p>
                                                        <p>10/03/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Entrega na Planta:</p>
                                                        <p>29/03/2019</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="content-po ">
                                        <header>
                                            <div className="gra">
                                                <p>GR Atual</p>
                                                <p>30/03/2019</p>
                                            </div>
                                            <div className="historico">
                                                <div className="hist-tit">
                                                    <p>Último Histórico</p>
                                                    <p className="date">08/04/2019</p>
                                                </div>
                                                <div className="boll">
                                                    <span></span>
                                                </div>
                                                <div className="infouser">
                                                    <img src={iconUser} alt="" />
                                                    <div className="info">
                                                        <p className="user">Roberta Beltran</p>
                                                        <p>Processo protocolado no MAPA - IN 26 12/03/2019</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </header>
                                        <div className="boxs">
                                            <div className="box">
                                                <div className="icon">
                                                    <img src={iconRemetente} alt="" />
                                                </div>
                                                <div className="info">
                                                    <div className="row">
                                                        <p>Item:</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>QTD. Produto:</p>
                                                        <p>19.400,00</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>QTD. Container:</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Peso:</p>
                                                        <p>19.400,00 KG</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="icon">
                                                    <img src={iconMap} alt="" />
                                                </div>
                                                <div className="info">
                                                    <div className="row">
                                                        <p>Origem:</p>
                                                        <p>1</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Destino:</p>
                                                        <p>AVENIDA CONSTANTE PAVAN 4327 PAULINIA</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Transportador:</p>
                                                        <p>Transporte Toniato</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box">
                                                <div className="icon">
                                                    <img src={iconAir} alt="" />
                                                </div>
                                                <div className="info">
                                                    <div className="row">
                                                        <p>ETD - Prev. Embarque:</p>
                                                        <p>22/02/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>ATD - Real. Embarque:</p>
                                                        <p>24/02/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>ETA - Prev. Entrega:</p>
                                                        <p>13/03/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>ATA - Real. Entrega:</p>
                                                        <p>10/03/2019</p>
                                                    </div>
                                                    <div className="row">
                                                        <p>Entrega na Planta:</p>
                                                        <p>29/03/2019</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Detalhe;