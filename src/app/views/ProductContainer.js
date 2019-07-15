import React, { Component } from 'react';
import API from '../services/api';
import List from './List';
import Detalhe from './Detalhe';

class ProductContainer extends Component {
  state = {
    products: [],
    product: null,
    isLoading: false,
    title: 'Gerencial',
  };

  componentDidMount() {
    this.getProducts();
  }

  async getProduct(uuid) {
    API.get(`products/${uuid}`).then(res => {
      const product = res.data;
      console.log(product);
      this.setState({
        product,
      });
    });
  }

  async getProducts() {
    this.setState({ isLoading: true });
    API.get(`products`).then(res => {
      const products = res.data;
      console.log(products);
      this.setState({
        products,
        isLoading: false,
      });
    });
  }

  handleRemoveProduct = () => {
    this.setState({
      product: null,
    });
  };

  async handleDetail(uuid) {
    await this.getProduct(uuid);
  }

  render() {
    const { products, product, isLoading } = this.state;
    return (
      <div>
        {product ? (
          <Detalhe
            product={product}
            onRemoveProduct={this.handleRemoveProduct}
          />
        ) : (
          <List
            products={products}
            isLoading={isLoading}
            onDetail={uuid => this.handleDetail(uuid)}
          />
        )}
      </div>
    );
  }
}

export default ProductContainer;
