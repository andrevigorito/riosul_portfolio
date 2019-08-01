import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import swal from '@sweetalert/with-react';

import { ContentTransit } from './styles';

import api from '../../services/api';
import iconBack from '../../img/icons/back.png';

export default function EditTransitTime({ match, history }) {
  const [cnpj, setCnpj] = useState('');
  const [modal, setModal] = useState('Air Import');
  const [origin, setOrigin] = useState('origin');
  const [destination, setDestination] = useState('destination');
  const [transit, setTransit] = useState('transit');
  const { uuid } = match.params;

  useEffect(() => {
    async function loadTransitTime() {
      const response = await api.get(`/transitTime/${uuid}`);

      setCnpj(response.data.cnpj);
      setModal(response.data.modal);
      setOrigin(response.data.origin);
      setDestination(response.data.destination);
      setTransit(response.data.transit);
    }

    loadTransitTime();
  }, []);

  async function submitForm() {
    const transitTime = {
      cnpj,
      modal,
      origin,
      destination,
      transit,
    };

    const response = await api.put(`transitTime/${uuid}`, transitTime);

    if (response.status === 200) {
      swal('Concluído', 'Transit Time Alterado com sucesso!', 'success');
      history.push('/transit');
    } else {
      swal('Erro', 'Não foi possível alterar o Transit Time!', 'error');
    }
  }

  return (
    <div className="center">
      <div className="page-header">
        <h1>Transit Time</h1>
        <div className="last-wrap">
          <div className="btnvoltar" onClick={() => history.goBack()}>
            <img src={iconBack} alt="" />
            <p>Voltar</p>
          </div>
        </div>
      </div>

      <ContentTransit>
        <form>
          <Grid>
            <Row>
              <Col xs={12} md={6}>
                <div className="item">
                  <label>CNPJ:</label>
                  <input
                    type="text"
                    value={cnpj}
                    onChange={e => setCnpj(e.target.value)}
                    maxLength={8}
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="item">
                  <label>Modal:</label>
                  <select
                    value={modal}
                    onChange={e => setModal(e.target.value)}
                  >
                    <option>Air Import</option>
                    <option>Ocean Import</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={5}>
                <div className="item">
                  <label>Origin:</label>
                  <input
                    type="text"
                    value={origin}
                    onChange={e => setOrigin(e.target.value)}
                  />
                </div>
              </Col>
              <Col xs={12} md={5}>
                <div className="item">
                  <label>Destination:</label>
                  <input
                    type="text"
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                  />
                </div>
              </Col>
              <Col xs={12} md={2}>
                <div className="item">
                  <label>Transit:</label>
                  <input
                    type="text"
                    value={transit}
                    onChange={e => setTransit(e.target.value)}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className="item">
                  <button
                    onClick={() => submitForm()}
                    type="button"
                    className="btn"
                  >
                    Alterar
                  </button>
                </div>
              </Col>
            </Row>
          </Grid>
        </form>
      </ContentTransit>
    </div>
  );
}
