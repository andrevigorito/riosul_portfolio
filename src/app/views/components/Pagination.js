/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const { onBefore, onAfter, onFirst, onLast, page, totalPages } = this.props;

    const firstPage = 'Primeira';
    const lastPage = 'Última';

    return (
      <div className="pagination">
        <button
          type="button"
          disabled={page === 1}
          className="arrow prev"
          onClick={onBefore()}
        >
          Anterior
        </button>

        <button
          type="button"
          disabled={page === 1}
          className="arrow"
          onClick={onFirst()}
        >
          {firstPage}
        </button>

        {page > 1 && (
          <button type="button" className="arrow" onClick={onBefore()}>
            {page - 1}
          </button>
        )}

        <button type="button" className="arrow active">
          {page}
        </button>

        {page < totalPages && (
          <button type="button" className="arrow" onClick={onAfter()}>
            {page + 1}
          </button>
        )}

        <button
          type="button"
          disabled={page === totalPages}
          className="arrow"
          onClick={onLast()}
        >
          {lastPage}
        </button>

        <button
          type="button"
          disabled={page === totalPages}
          className="arrow next"
          onClick={onAfter()}
        >
          Próxima
        </button>
      </div>
    );
  }
}

export default Pagination;
