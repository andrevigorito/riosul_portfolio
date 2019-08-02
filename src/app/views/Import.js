import React, { Component, Fragment } from 'react';
import XLSX from 'xlsx';
import io from 'socket.io-client';
import { toast } from 'react-toastify';
import API from '../services/api';

// Images
import iconTitleDash from '../img/icons/title-dash.png';

// Components
import Loading from './components/Loading';
import DragAndDrop from './components/DragAndDrop';

const socket = io('https://webcol.herokuapp.com');

class Import extends Component {
  state = {
    isConverting: false,
    isSending: false,
    isWaiting: false,
  };

  componentDidMount() {
    this.registerToSocket();
  }

  componentWillUnmount() {
    this.unregisterToSocket();
  }

  handleImportAtl = async file => {
    this.setState({ isConverting: true });
    const workbook = await this.getWorkbookFromFile(file[0] ? file[0] : file);
    const first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = await XLSX.utils.sheet_to_json(first_worksheet, { header: 0 });
    this.setState({ isConverting: false });
    this.sendImportATL(data);
  };

  sendImportATL(data) {
    this.setState({ isSending: true });
    API.post(`products`, data, {
      headers: { 'Content-Type': 'application/json' },
    }).then(res => {
      this.setState({ isSending: false, isWaiting: true });
    });
  }

  async getWorkbookFromFile(excelFile) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = event => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary', cellDates: true });
        resolve(workbook);
      };
      reader.readAsBinaryString(excelFile);
    });
  }

  registerToSocket = () => {
    socket.on('productsImport', () => {
      this.setState({ isWaiting: false });
      this.notifySucess('IMPORTAÇÃO ATL CONCLUÍDA!');
    });
  };

  unregisterToSocket = () => {
    socket.removeListener('productsImport');
  };

  notifySucess = msg => {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  notifyWarn = msg => {
    toast.warn(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  notifyError = msg => {
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  render() {
    return (
      <div>
        <div className="center">
          <div className="page-header">
            <h1>
              <img src={iconTitleDash} alt="" />
              Import
            </h1>
          </div>
          <center>
            {this.state.isConverting ? (
              <Fragment>
                <Loading />
                <h2>CONVERTENDO PLANILHA EXCEL...</h2>
              </Fragment>
            ) : this.state.isSending ? (
              <Fragment>
                <Loading />
                <h2>ENVIANDO DADOS PARA O SERVIDOR...</h2>
              </Fragment>
            ) : this.state.isWaiting ? (
              <Fragment>
                <Loading />
                <h2>ENVIADO COM SUCESSO! AGUARDANDO RESPOSTA DO SERVIDOR...</h2>
              </Fragment>
            ) : (
              <Fragment>
                <input style={{
                      borderRadius: 6,
                      background: '#1ABC9C',
                      // padding: 10px 20px,
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20,
                      fontSize: 14,
                      color: '#fff',
                    }} type="file" onChange={ (event) => this.handleImportAtl(event.target.files)}
                />
             
                <DragAndDrop
                  handleDrop={this.handleImportAtl}
                  style={{ marginTop: 10 }}
                >
                  <div
                    style={{
                      height: 300,
                      width: 800,
                      borderColor: '#1ABC9C',
                      borderWidth: '1px',
                      borderStyle: 'dashed',
                      backgroundColor: 'white',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <p style={{ flex: 1, fontSize: 14 }}>
                      ou arraste a planilha para este local
                    </p>
                  </div>
                </DragAndDrop>
              </Fragment>
            )}
          </center>
        </div>
      </div>
    );
  }
}

export default Import;
