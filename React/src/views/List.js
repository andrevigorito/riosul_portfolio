import React, {Component} from 'react'
// Images
import iconRgc from '../img/icons/rg-c.png'
import iconRgp from '../img/icons/rg-p.png'

// Components
import Menu from './components/Menu';
import Header from './components/Header';
import PageHeader from './components/PageHeader';


class List extends Component {

	
    render(){
        return(
			<div>
				<Menu />
				<Header />
				<PageHeader />
				
				<div className="center">
	
					<div className="content-regerencial">
						<div className="list-rege">
	
							<header className="headerlist">
								<div className="first">
									<p>ID / Produto</p>
									<p>GR Atual</p>
								</div>
								<div className="last">
									<p>*Alterada <span className="a"></span></p>
									<p>*Urgente: Y<span className="y"></span>N<span className="n"></span></p>
								</div>
							</header>
	
							<div className="item">
								<div className="main-info">
									<p className="emp">Dupont</p>
									<p className="idpro">D13319661</p>
									<p className="namepro">FRONT</p>
								</div>
	
								<div className="info">
									<div className="list-gra">
										<div className="item-gra">
											<p><img src={iconRgc} alt="" /> 30/05/2019</p>
											<p><img src={iconRgp} alt="" /> 43.200</p>
										</div>
										<div className="item-gra">
											<p className="alterada"><img src={iconRgc} alt="" /> 03/06/2019</p>
											<p><img src={iconRgp} alt="" /> 10.800</p>
										</div>
										<div className="item-gra">
											<p><img src={iconRgc} alt="" /> 07/06/2019</p>
											<p><img src={iconRgp} alt="" /> 75.000</p>
										</div>
									</div>
									<div className="item-gra">
										<p><strong>Total</strong></p>
										<p><img src={iconRgp} alt="" /> 129.000</p>
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

export default List;