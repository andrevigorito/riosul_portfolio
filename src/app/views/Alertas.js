import React, { Component } from 'react';
import PropTypes from 'prop-types';
import API from '../services/api';

// Images
import iconTitleAlert from '../img/icons/title-alert.png';

// Components
import Loading from './components/Loading';
import FilterAlert from './components/FilterAlert';

class Alertas extends Component {
  static propTypes = {
    useruuid: PropTypes.string.isRequired,
  };

  state = {
    alerts: [],
    isLoading: false,
  };

  async componentDidMount() {
    const { useruuid } = this.props;
    // console.log(`prop useruuid -> ${this.props}`);

    // const useruuid = '12430f8a-e492-4efb-a8cd-bb2b2784567c';
    this.setState({ isLoading: true });
    const res = await API.get(`alerts/user/all/${useruuid}`);
    console.log(res);

    this.setState({
      alerts: res.data,
      isLoading: false,
    });
  }

  btnFilter = () => {
    const filter = document.querySelector('.filter-box');
    filter.classList.toggle('active');
    const btn = document.querySelector('.btn-filter-nfs');
    btn.classList.toggle('active');
  };

  render() {
    const { useruuid } = this.props;
    console.log(`prop useruuid -> ${useruuid}`);

    const { isLoading, alerts } = this.state;
    return (
      <div>
        <div className="center">
          <div className="page-header">
            <h1>
              <img src={iconTitleAlert} alt="" />
              Alertas
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

          <FilterAlert />

          <div className="list-alerts">
            <div className="header">
              <p>Data Alerta</p>
              <p>Mensagem</p>
              <p>Lido</p>
              <p>Data Leitura</p>
            </div>
            {isLoading && <Loading />}
            {alerts.map(alerta => (
              <div className="item" key={alerta.uuid}>
                <p className="date current">
                  {new Date(alerta.createdAt).toLocaleDateString()}
                </p>
                <p className="po">{alerta.message}</p>
                <p className="po">
                  {alerta.userAlerts[0].read ? 'Sim' : 'Não'}
                </p>
                <p className="altered date">
                  {alerta.userAlerts[0].read
                    ? new Date(
                        alerta.userAlerts[0].updatedAt
                      ).toLocaleDateString()
                    : ''}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Alertas;
