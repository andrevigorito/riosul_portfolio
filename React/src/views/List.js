import React, {Component} from 'react'
import API from '../service/api';
// Images
import iconRgc from '../img/icons/rg-c.png'
import iconRgp from '../img/icons/rg-p.png'

// Components
import Menu from './components/Menu';
import Header from './components/Header';
import PageHeader from './components/PageHeader';
import Loading from './components/Loading';


class List extends Component {
	state = {
		products: [],
		isLoading: false,
		total: 0,
		hasMoreItems: true,
	}

	componentDidMount() {
		this.setState({ isLoading: true })
		API.get(`products`)
		  .then(res => {
			const products = res.data;
			console.log(products)
			this.setState({ 
				products,
				isLoading: false
			 });
			
		  })
		  .catch(error => {
			console.log(error);
		  });
	  }

	  
	
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

							
							{ this.state.isLoading && <Loading /> }
							{ this.state.products.map(product => 
								<div className="item" key={product.product_id}>
									<div className="main-info">
										<p className="emp">{product.consignee.split(' ')[0]}</p>
										<p className="idpro">{product.product_id}</p>
										{/* <p className="namepro">{product.name.substring(0,20)}</p> */}
										<p className="namepro">{product.product_description}</p>
									</div>

									<div className="info">
										<div className="list-gra">
											{ 
												product.pos.map(po =>  
												<div className={po.alert ? "item-gra alert": "item-gra"}  key={po.uuid}>
													<p><img src={iconRgc} alt="" /> {new Date(po.eta_date).toLocaleDateString()}</p>
													<p><img src={iconRgp} alt="" /> {po.qty}</p>
												</div>
											)}
										</div>
										 
										<div className="item-gra">
											<p><strong>Total</strong></p>
											<p><img src={iconRgp} alt="" />10000</p>
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