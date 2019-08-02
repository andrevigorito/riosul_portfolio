/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    return (
      <div className="pagination">
        <div className="arrow prev">Anterior</div>
        <div className="arrow">1</div>
        <div className="arrow">2</div>
        <div className="arrow">3</div>
        <div className="arrow next">Próxima</div>
      </div>
    );
  }
}

export default Pagination;
