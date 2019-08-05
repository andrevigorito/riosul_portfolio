import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Images
import iconRgc from '../img/icons/rg-c.png';
import iconRgp from '../img/icons/rg-p.png';

// Components
import PageHeader from './components/PageHeader';
import Loading from './components/Loading';

class List extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    products: PropTypes.shape(PropTypes.any).isRequired,
    onDetail: PropTypes.func.isRequired,
  };

  state = {
    title: 'Gerencial',
  };

  render() {
    const { isLoading, products} = this.props;
    let total = 0;

    // const adicionaTotal = valor => {
    //   total += valor;
    // };

    const zeraTotal = () => {
      total = 0;
    };

    return (
      <div>
        <PageHeader title={this.title} />

        <div className="center">
          <div className="content-regerencial">
            <div className="list-rege">
              <header className="headerlist">
                <div className="first">
                  <p>ID / Produto</p>
                  <p>GR Programado</p>
                </div>
                <div className="last">
                  <p>
                    *Alterada <span className="a" />
                  </p>
                  <p>
                    *Urgente: Y<span className="y" />N
                    <span className="n" />
                  </p>
                </div>
              </header>

              {isLoading && <Loading />}
              {products.map(product => (
                <div
                  className="item"
                  key={product.uuid}
                  // onClick={() => onDetail(product.uuid)}
                >
                  <div className="main-info">
                    <p className="emp">{product.consignee.split(' ')[0]}</p>
                    <p className="idpro">{product.product_id}</p>
                    <p className="namepro">
                      {product.product_description.substring(0, 20)}
                    </p>
                    {/* <p className="namepro">{product.name}</p> */}
                  </div>

                  <div className="info">
                    <div className="list-gra">
                      {product.items.map(po => (
                        <div
                          className={po.alert ? 'item-gra alert' : 'item-gra'}
                          key={po.uuid}
                        >
                          <p>
                            <img src={iconRgc} alt="" />{' '}
                            {new Date(po.gr_requested_date).toLocaleDateString()}
                          </p>
                          <p>
                            <img src={iconRgp} alt="" />{' '}
                            {po.total ? po.total.toLocaleString() : ''}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="item-total">
                      <p>
                        <strong>Total</strong>
                      </p>
                      <p>
                        <img src={iconRgp} alt="" />
                        {product.totalProduto
                          ? product.totalProduto.toLocaleString()
                          : ''}
                      </p>
                      {zeraTotal()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
