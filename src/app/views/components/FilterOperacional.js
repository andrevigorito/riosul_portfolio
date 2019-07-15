import React, { Component } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import ptBR from 'date-fns/locale/pt-BR';

registerLocale('pt-BR', ptBR);

class Filter extends Component {
  state = {
    startDate: new Date(),
    endDate: new Date(),
  };

  handleChangeDate = date => {
    this.setState({
      date,
    });
  };

  handleChangeStart = date => {
    this.setState({
      startDate: date,
    });
  };

  handleChangeEnd = date => {
    this.setState({
      endDate: date,
    });
  };

  render() {
    const { date, startDate, endDate } = this.state;
    return (
      <div className="filter-box">
        <form action="" className="formoperacional">
          <div className="item">
            <label>Palavra Chave:</label>
            <input type="text" id="idproduto" />
          </div>

          <div className="item">
            <label>Produto:</label>
            <input type="text" id="idproduto" />
          </div>
          <div className="item">
            <label>ATA:</label>

            <DatePicker
              locale="pt-BR"
              selected={date}
              selectsStart
              startDate={startDate}
              onChange={this.handleChangeDate}
              dateFormat="d MMMM , yyyy "
            />
          </div>
          <div className="item">
            <label>GR Programado:</label>

            <DatePicker
              locale="pt-BR"
              selected={startDate}
              selectsStart
              onChange={this.handleChangeStart}
              startDate={startDate}
              endDate={endDate}
              dateFormat="d MMMM , yyyy "
            />
          </div>
          <div className="item">
            <label>GR Efeitvo:</label>

            <DatePicker
              locale="pt-BR"
              selected={endDate}
              selectsEnd
              onChange={this.handleChangeEnd}
              startDate={startDate}
              endDate={endDate}
              dateFormat="d MMMM , yyyy "
              minDate={startDate}
            />
          </div>

          <div className="item">
            <label> &nbsp; </label>
            <button type="button" className="btn">
              Filtrar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Filter;
