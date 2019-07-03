import React, {Component} from 'react'

// Images
import iconRgc from '../img/icons/rg-c.png'
import iconRgp from '../img/icons/rg-p.png'

// Components
import PageHeader from './components/PageHeader';
import Loading from './components/Loading';



class List extends Component {
	
	state = {
		title: 'Gerencial'
	}
	  
	
    render(){

        return(
			<div>
				
				<PageHeader title={this.title} />
				
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

							{ this.props.isLoading && <Loading /> }
							{ this.props.products.map(product => 
								<div className="item" key={product.uuid} onClick={() => this.props.onDetail(product.uuid)}>
									<div className="main-info">
										<p className="emp">{product.consignee.split(' ')[0]}</p>
										<p className="idpro">{product.product_id}</p>
										<p className="namepro">{product.product_description.substring(0,20)}</p>
										{/* <p className="namepro">{product.name}</p> */}
									</div>
									
									<div className="info">
										<div className="list-gra">
											{ 
												product.pos.map(po =>  
												
													<div className={po.alert ? "item-gra alert": "item-gra"}  key={po.uuid}>
														<p><img src={iconRgc} alt="" /> {new Date(po.eta_date).toLocaleDateString()}</p>
														<p><img src={iconRgp} alt="" /> {po.qty.toLocaleString()}</p>
													</div>
											)}
										</div> 
										 
										<div className="item-gra">
											<p><strong>Total</strong></p>
											<p><img src={iconRgp} alt="" />{product.pos.reduce((total, obj) => obj.qty + total,0).toLocaleString()}</p>
										</div>
									</div>

								</div>	
							)}
						</div>
					</div>
				</div>
			
			</div>
		)
    }
}

export default List;