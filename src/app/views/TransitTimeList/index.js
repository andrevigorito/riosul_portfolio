import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from '@sweetalert/with-react';

import api from '../../services/api';

import { UserList, BtnCadastrar } from './styles';

export default function TransitTimeList() {
  const [transitTimeList, setTransiTimeList] = useState([]);

  useEffect(() => {
    async function loadTrasitTime() {
      const response = await api.get(`/transitTime`);
      setTransiTimeList(response.data);
    }

    loadTrasitTime();
  }, []);

  async function removerTransitTime(uuid) {
    const confirmDelete = await swal({
      dangerMode: true,
      text: 'Confirma a exclusão do transit time?',
      buttons: {
        cancel: 'Não',
        confirm: 'Sim',
      },
    });

    if (confirmDelete) {
      await api.delete(`/transitTime/${uuid}`);

      const response = await api.get(`/transitTime`);
      setTransiTimeList(response.data);
    }
  }

  return (
    <div>
      <div className="center">
        <div className="page-header">
          <h1>Transit Time</h1>
          <div className="last-wrap">
            <Link to="/novo/transit/">
              <BtnCadastrar>Adicionar Transit Time</BtnCadastrar>
            </Link>
          </div>
        </div>
        <div>
          <UserList>
            <div className="header">
              {/* <p>Nome</p> */}
              <p>CNPJ</p>
              <p>Modal</p>
              <p>Origin</p>
              <p>Destination</p>
              <p>Transit</p>
              <p>Alterar</p>
            </div>

            {transitTimeList.map(transitTime => (
              <div className="item" key={transitTime.uuid}>
                <p>{transitTime.cnpj}</p>
                <p>{transitTime.modal}</p>
                <p>{transitTime.origin}</p>
                <p>{transitTime.destination}</p>
                <p>{transitTime.transit}</p>
                <p>
                  <Link to={`/transit/${transitTime.uuid}`}>
                    <button type="button" className="btn">
                      Alterar
                    </button>
                  </Link>

                  <button
                    type="button"
                    className="btn excluir"
                    onClick={() => removerTransitTime(transitTime.uuid)}
                  >
                    Excluir
                  </button>
                </p>
              </div>
            ))}
          </UserList>
        </div>
      </div>
    </div>
  );
}
