import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import swal from '@sweetalert/with-react';

import api from '../../services/api';
import iconBack from '../../img/icons/back.png';

import { ContentTransit } from './styles';

export default function AddTransitTime({ history }) {
  const [cnpj, setCnpj] = useState('');
  const [modal, setModal] = useState('Air Import');
  const [origin, setOrigin] = useState('origin');
  const [destination, setDestination] = useState('destination');
  const [transit, setTransit] = useState('transit');

  async function submitForm() {
    const transitTime = {
      cnpj,
      modal,
      origin,
      destination,
      transit,
    };

    if (!cnpj || !modal || !origin || !destination || !transit) {
      swal('Erro', 'Você precisa preencher todos os campos!', 'error');
      return;
    }

    const response = await api.post(`transitTime`, transitTime);

    if (response.status === 200) {
      swal('Concluído', 'Transit Time Criado com sucesso!', 'success');
      history.push('/transit');
    } else {
      swal('Erro', 'Não foi possível criar o Transit Time!', 'error');
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
                    required
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="item">
                  <label>Modal:</label>
                  <select onChange={e => setModal(e.target.value)} required>
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
                    id=""
                    onChange={e => setOrigin(e.target.value)}
                    required
                  />
                </div>
              </Col>
              <Col xs={12} md={5}>
                <div className="item">
                  <label>Destination:</label>
                  <input
                    type="text"
                    id=""
                    onChange={e => setDestination(e.target.value)}
                    required
                  />
                </div>
              </Col>
              <Col xs={12} md={2}>
                <div className="item">
                  <label>Transit:</label>
                  <input
                    type="text"
                    id=""
                    onChange={e => setTransit(e.target.value)}
                    required
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
                    required
                  >
                    Cadastrar
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
