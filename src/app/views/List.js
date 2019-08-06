import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Images
import iconRgc from '../img/icons/rg-c.png';
import iconRgp from '../img/icons/rg-p.png';

import { format } from 'date-fns';

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
    dupont: false,
    dow: false,
    produto: '',
    startDate: '',
    endDate: '',
  };

  btnFilter = () => {
    const filter = document.querySelector('.filter-box');
    filter.classList.toggle('active');
    const btn = document.querySelector('.btn-filter-nfs');
    btn.classList.toggle('active');
  };

  handleCheckboxDupont = () => {
    const { dupont } = this.state;
    this.setState({ dupont: !dupont });
  };

  handleChangeStart = date => {
    this.setState({ startDate: date });
  };

  handleChangeEnd = date => {
    this.setState({ endDate: date });
  };

  handleCheckboxDow = () => {
    const { dow } = this.state;
    this.setState({ dow: !dow });
  };

  handleFormSubit = () => {
    const { dupont } = this.state;
    this.setState({ dupont: !dupont });
  };

  handleProduto = e => {
    this.setState({ produto: e.target.value });
  };

  handleFormSubit = e => {
    e.preventDefault();
    const { produto, dow, dupont, startDate, endDate } = this.state;

    const { onFilter } = this.props;

    const params = {
      produto,
    };

    if (dow) {
      params.dow = 'dow';
    }

    if (dupont) {
      params.dupont = 'dupont';
    }

    if (startDate) {
      params.dataDe = format(startDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    }

    if (endDate) {
      params.dataAte = format(endDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    }

    onFilter(params);
  };

  render() {
    const { isLoading, products } = this.props;
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
                            {new Date(
                              po.gr_requested_date
                            ).toLocaleDateString()}
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
