import React, { Component } from 'react';
import { ContentTransit } from './styles';
import { Grid, Row, Col } from 'react-flexbox-grid';

class TransitTime extends Component {
  state = {};

  render() {
    // eslint-disable-next-line prettier/prettier

    return (
      <div className="center">
        <div className="page-header">
          <h1>Transit Time</h1>
        </div>

        <ContentTransit>
          <form>
            <Grid>
              <Row>
                <Col xs={12} md={6}>
                  <div className="item">
                    <label>CNPJ:</label>
                    <input type="text" id="" />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="item">
                    <label>Modal:</label>
                    <select>
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
                    <input type="text" id="" />
                  </div>
                </Col>
                <Col xs={12} md={5}>
                  <div className="item">
                    <label>Destination:</label>
                    <input type="text" id="" />
                  </div>
                </Col>
                <Col xs={12} md={2}>
                  <div className="item">
                    <label>Transit:</label>
                    <input type="text" id="" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <div className="item">
                    <button type="button" className="btn">
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
}

export default TransitTime;
