import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import { format } from 'date-fns';

import API from '../services/api';
import 'react-datepicker/dist/react-datepicker.css';

// Images
import iconOperacional from '../img/icons/title-ope.png';

// Components
import Loading from './components/Loading';
import Pagination from './components/Pagination';
import ExportExcel from './components/ExportExcel'

registerLocale('pt-BR', ptBR);
// import FilterOperacional from './components/FilterOperacional';

class Operacional extends Component {
  state = {
    operacional: [],
    isLoading: false,
    filtroAtivo: false,
    ataDateIncio: '',
    grProgramado: '',
    grEfetivo: '',
    page: 1,
    po: '',
    produto: '',
  };

  handleBefore = () => {
    const { page } = this.state;

    if (page > 1) {
      this.setState(prevState => ({
        page: prevState.page - 1,
      }));
    }
  };

  handleAfter = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (page !== prevState.page) {
      this.getPoItems();
    }
  }

  componentDidMount() {
    this.getPoItems();
  }

  async getPoItems() {
    this.setState({ isLoading: true });

    const { page } = this.state;

    const params = {
      page,
    };

    const response = await API.get(`poItems`, { params });
    const { data: operacional } = response;

    this.setState({
      operacional,
      isLoading: false,
    });
  }

  btnFilter = () => {
    const { filtroAtivo } = this.state;
    this.setState({ filtroAtivo: !filtroAtivo });
  };

  handleQueryInput = e => {
    this.setState({ po: e.target.value });
  };

  handleProduto = e => {
    this.setState({ produto: e.target.value });
  };

  handleChangeDateAta = date => {
    this.setState({ ataDateIncio: date });
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

  handleFormSubit = async e => {
    e.preventDefault();

    this.setState({ isLoading: true });

    const {
      page,
      po,
      produto,
      ataDateIncio,
      grProgramado,
      grEfetivo,
    } = this.state;

    const params = {
      page,
      po,
      produto,
    };

    if (ataDateIncio) {
      params.ata = format(ataDateIncio, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    }

    if (grProgramado) {
      params.grResquestedDate = format(
        grProgramado,
        "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      );
    }

    if (grEfetivo) {
      params.grAtual = format(grEfetivo, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    }

    const response = await API.get(`poItems`, { params });
    const operacional = response.data;

    this.setState({
      operacional,
      isLoading: false,
    });
  };

  render() {
    const {
      isLoading,
      operacional,
      filtroAtivo,
      grEfetivo,
      ataDateIncio,
      grProgramado,
      page,
    } = this.state;

    const csvData = operacional;
    console.log(csvData)

    return (
      <div>
        <div className="center">
          <div className="page-header">
            <h1>
              <img src={iconOperacional} alt="" />
              Operacional
            </h1>
            <div className="last-wrap">
              <CSVLink data={csvData}>
                <ExportExcel />
              </CSVLink>
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
                <label>PO:</label>
                <input
                  type="text"
                  id="idproduto"
                  onChange={this.handleQueryInput}
                  autoComplete="false"
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

            {isLoading ? (
              <Loading />
            ) : (
              operacional.map(ope => (
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
              ))
            )}

            <Pagination
              page={page}
              onAfter={() => this.handleAfter}
              onBefore={() => this.handleBefore}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Operacional;
