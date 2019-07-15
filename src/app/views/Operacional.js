import React, { Component } from 'react';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import API from '../services/api';

// Images
import iconOperacional from '../img/icons/title-ope.png';

// Components
import Loading from './components/Loading';
import FilterOperacional from './components/FilterOperacional';

class Operacional extends Component {
  state = {
    operacional: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    API.get(`poItems`).then(res => {
      const operacional = res.data;
      console.log(operacional);
      this.setState({
        operacional,
        isLoading: false,
      });
    });
  }

  btnFilter = () => {
    const filter = document.querySelector('.filter-box');
    filter.classList.toggle('active');
    const btn = document.querySelector('.btn-filter-nfs');
    btn.classList.toggle('active');
  };

  openPopupbox = () => {
    const content = (
      <div className="lb-justificativa">
        <div className="content">
          <h2>Justificativa</h2>
          {/* <div className='form-just'>
                    <div className='row c2'>
                        <div className='item'>
                            <label>Tipo de Justificativa</label>
                            <select>
                                <option>Teste</option>
                            </select>
                        </div>
                        <div className='item'>
                            <label>E-mail</label>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='item'>
                            <label>Justificativa</label>
                            <textarea></textarea>
                        </div>
                    </div>
                    <button type="button" className='btn'>Enviar</button>
                </div> */}

          <div className="list-justificativas">
            <div className="item">
              <p>
                Nulla vel placerat dolor. Etiam feugiat odio malesuada
                pellentesque vulputate. Nulla convallis varius erat quis
                vestibulum. Donec vitae ipsum vel elit porttitor porttitor quis
                eu sem.
              </p>
              <div className="user">
                <input type="checkbox" />
                <p>Romero Almeida</p>
                <p>12/07/2019 08:16:21</p>
                <p>XO - AGENDAMENTO</p>
              </div>
            </div>
            <div className="item">
              <p>
                Nulla vel placerat dolor. Etiam feugiat odio malesuada
                pellentesque vulputate. Nulla convallis varius erat quis
                vestibulum. Donec vitae ipsum vel elit porttitor porttitor quis
                eu sem.
              </p>
              <div className="user">
                <input type="checkbox" />
                <p>Romero Almeida</p>
                <p>12/07/2019 08:16:21</p>
                <p>XO - AGENDAMENTO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap-btns">
          <div className="btnclose" onClick={PopupboxManager.close}>
            x
          </div>
          <button type="button" className="btn abonar">
            Abonar
          </button>
          <button type="button" className="btn">
            Justificativas
          </button>
          <button type="button" className="btn">
            Adicionar
          </button>
        </div>
      </div>
    );
    PopupboxManager.open({ content });
  };

  render() {
    const popupboxConfig = {
      fadeIn: true,
      fadeInSpeed: 500,
    };

    const { isLoading, operacional } = this.state;

    return (
      <div>
        <div className="center">
          <div className="page-header">
            <h1>
              <img src={iconOperacional} alt="" />
              Operacional
            </h1>
            <div className="last-wrap">
              <div className="btn-filter-nfs" onClick={this.btnFilter}>
                <div className="icon-filter">
                  <span />
                  <span />
                  <span />
                </div>
                Filtrar
              </div>
            </div>
          </div>

          <FilterOperacional />
          <PopupboxContainer {...popupboxConfig} />
          <div className="list-ope">
            <header className="header-list-ope">
              <p className="critico">Crit.</p>
              <p className="po">PO</p>
              <p className="produto">Produto</p>
              <p className="descricao">Descrição</p>
              <p className="qtd">Qtd.</p>
              <p className="pd">P. Destino</p>
              <p className="ata">ATA</p>
              <p className="grp">GR Prog.</p>
              <p className="gre">GR Efet.</p>
              <p className="status">Status / Just.</p>
            </header>

            {isLoading && <Loading />}

            {operacional.map(ope => (
              <div className="item" key={ope.uuid}>
                <span className="critico" />
                <p className="po">{ope.po.order_reference}</p>
                <p className="produto">{ope.po.product.product_id}</p>
                <p className="descricao">
                  {ope.po.product.product_description}
                </p>
                <p className="qtd">{ope.qty}</p>
                <p className="pd">{ope.plant_id}</p>
                <p className="ata">
                  {ope.ata_date
                    ? new Date(ope.ata_date).toLocaleDateString()
                    : '-'}
                </p>
                <p className="grp">
                  {ope.gr_requested_date
                    ? new Date(ope.gr_requested_date).toLocaleDateString()
                    : '-'}
                </p>
                <p className="gre">
                  {ope.gr_actual
                    ? new Date(ope.gr_actual).toLocaleDateString()
                    : '-'}
                </p>
                <div className="status alert">
                  <p>{ope.status}</p>{' '}
                  <div
                    onClick={this.openPopupbox}
                    className="icon-justificativa"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Operacional;
