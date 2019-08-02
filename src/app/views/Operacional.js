import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import { parseISO, isSameDay } from 'date-fns';

import API from '../services/api';
import 'react-datepicker/dist/react-datepicker.css';

// Images
import iconOperacional from '../img/icons/title-ope.png';

// Components
import Loading from './components/Loading';

registerLocale('pt-BR', ptBR);
// import FilterOperacional from './components/FilterOperacional';

class Operacional extends Component {
  state = {
    operacional: [],
    operacionalFiltrada: [],
    isLoading: false,
    filtroAtivo: false,
    produtoFiltro: '',
    queryFilter: '',
    ataDateIncio: '',
    grProgramado: '',
    grEfetivo: '',
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const response = await API.get('poItems/1');
    const { data: operacional } = response;

    this.setState({
      operacional,
      operacionalFiltrada: operacional,
      isLoading: false,
    });
  }

  btnFilter = () => {
    const { filtroAtivo } = this.state;
    this.setState({ filtroAtivo: !filtroAtivo });
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

  handleQueryInput = e => {
    this.setState({ queryFilter: e.target.value });
  };

  handleProduto = e => {
    this.setState({ produtoFiltro: e.target.value });
  };

  handleChangeDateAta = date => {
    this.setState({
      ataDateIncio: date,
    });
  };

  handleChangeGrProgramado = date => {
    this.setState({
      grProgramado: date,
    });
  };

  handleChangeGrEfetivo = date => {
    this.setState({
      grEfetivo: date,
    });
  };

  handleFormSubit = e => {
    e.preventDefault();

    this.setState({ isLoading: true });

    const {
      queryFilter,
      operacional,
      produtoFiltro,
      ataDateIncio,
      grProgramado,
      grEfetivo,
    } = this.state;

    let newOpe = operacional;

    if (produtoFiltro) {
      newOpe = newOpe.filter(
        ope => ope.po.product.product_id.indexOf(produtoFiltro) > -1
      );
    }

    if (queryFilter) {
      newOpe = newOpe.filter(
        ope =>
          ope.po.order_reference.indexOf(queryFilter) > -1 ||
          ope.po.product.product_description.indexOf(queryFilter) > -1
      );
    }

    if (ataDateIncio) {
      newOpe = newOpe.filter(
        ope => isSameDay(parseISO(ope.ata_date), ataDateIncio) === true
      );
    }

    if (grProgramado) {
      newOpe = newOpe.filter(
        ope => isSameDay(parseISO(ope.gr_requested_date), grProgramado) === true
      );
    }

    if (grEfetivo) {
      newOpe = newOpe.filter(
        ope => isSameDay(parseISO(ope.gr_actual), grEfetivo) === true
      );
    }

    if (
      !queryFilter &&
      !produtoFiltro &&
      !ataDateIncio &&
      !grProgramado &&
      !grEfetivo
    ) {
      newOpe = operacional;
    }

    this.setState({ operacionalFiltrada: newOpe, isLoading: false });
  };

  render() {
    const popupboxConfig = {
      fadeIn: true,
      fadeInSpeed: 500,
    };

    const {
      isLoading,
      operacionalFiltrada,
      filtroAtivo,
      grEfetivo,
      ataDateIncio,
      grProgramado,
    } = this.state;

    return (
      <div>
        <div className="center">
          <div className="page-header">
            <h1>
              <img src={iconOperacional} alt="" />
              Operacional
            </h1>
            <div className="last-wrap">
              <div
                className={`btn-filter-nfs ${filtroAtivo ? 'active' : ''}`}
                onClick={this.btnFilter}
              >
                <div className="icon-filter">
                  <span />
                  <span />
                  <span />
                </div>
                Filtrar
              </div>
            </div>
          </div>

          <div className={`filter-box ${filtroAtivo ? 'active' : ''}`}>
            <form className="formoperacional" onSubmit={this.handleFormSubit}>
              <div className="item">
                <label>Palavra Chave:</label>
                <input
                  type="text"
                  id="idproduto"
                  onChange={this.handleQueryInput}
                />
              </div>

              <div className="item">
                <label>Produto:</label>
                <input
                  type="text"
                  id="idproduto"
                  onChange={this.handleProduto}
                />
              </div>

              <div className="item">
                <label>ATA:</label>

                <DatePicker
                  locale="pt-BR"
                  selected={ataDateIncio}
                  selectsStart
                  startDate={ataDateIncio}
                  onChange={this.handleChangeDateAta}
                  dateFormat="dd/MM/yyyy"
                />
              </div>

              <div className="item">
                <label>GR Programado:</label>

                <DatePicker
                  locale="pt-BR"
                  selected={grProgramado}
                  selectsStart
                  onChange={this.handleChangeGrProgramado}
                  startDate={grProgramado}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div className="item">
                <label>GR Efetivo:</label>

                <DatePicker
                  locale="pt-BR"
                  selected={grEfetivo}
                  selectsEnd
                  onChange={this.handleChangeGrEfetivo}
                  startDate={grEfetivo}
                  dateFormat="dd/MM/yyyy"

                />
              </div>

              <div className="item">
                <label> &nbsp; </label>
                <button type="submit" className="btn">
                  Filtrar
                </button>
              </div>
            </form>
          </div>

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

            {operacionalFiltrada.map(ope => (
              <Link to={`operacional/detalhe/${ope.uuid}`} key={ope.uuid}>
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
                    {/* <div
                      onClick={this.openPopupbox}
                      className="icon-justificativa"
                    /> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Operacional;
