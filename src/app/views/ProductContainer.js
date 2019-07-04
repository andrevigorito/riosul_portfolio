import React, {Component} from 'react'
import API from '../service/api';
import List from './List'
import Detalhe from './Detalhe'


class ProductContainer extends Component {
	state = {
		products: [],
		product: null,
		isLoading: false,
		title: 'Gerencial'
	}

	componentDidMount() {
		
		this.getProducts()
		
	  }
	
	async handleDetail(uuid){
		
		await this.getProduct(uuid)
		
		
	}
	
	async getProduct(uuid){
		
		API.get('products/'+uuid)
		  .then(res => {
			const product = res.data;
			console.log(product)
			this.setState({ 
				product,
			 });
		  })
		  
	}
	
	async getProducts(){
		
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
		
	}
	
	handleRemoveProduct = () => {
		
		this.setState({ 
			product: null
		 });
		 
	}
	  
	
    render(){

        return(
			<div>
				
				{this.state.product ?
					
					<Detalhe 
						product={this.state.product}
						onRemoveProduct={this.handleRemoveProduct}
					/>
					:
					<List 
						products={this.state.products}
						isLoading={this.state.isLoading}
						onDetail={(uuid) => this.handleDetail(uuid)}
						
					/>
					
				}
			
			</div>
		)
    }
}

export default ProductContainer;