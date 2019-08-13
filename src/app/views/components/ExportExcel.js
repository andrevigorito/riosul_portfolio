import React, { Component } from 'react';
import imgExcel from '../../img/excel.png';

// eslint-disable-next-line react/prefer-stateless-function
class ExportExcel extends Component {
  render() {
    return (
      <div className="exportexcel">
        <span>
          <img src={imgExcel} alt="" />
        </span>
        <p>Exportar Relatório</p>
      </div>
    );
  }
}

export default ExportExcel;
