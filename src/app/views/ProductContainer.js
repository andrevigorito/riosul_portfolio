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

  async handleFilter(params) {
    this.setState({ isLoading: true });

    // const params = {
    //   produto: 'D12768664',
    // };
    const response = await API.get(`products`, { params });

    const products = response.data;

    this.setState({
      products,
      isLoading: false,
    });
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
            onFilter={params => this.handleFilter(params)}
          />
        )}
      </div>
    );
  }
}

export default ProductContainer;
