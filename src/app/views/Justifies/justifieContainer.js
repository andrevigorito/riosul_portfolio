import React, { Component } from 'react';
import API from '../../services/api';

// Components
import JustifieForm from './justifieForm';
import JustifieList from './justifieList';

// Components
class justifieContainer extends Component {
  state = {
    modalJust: false,
    modalAddJust: true,
  };

  async componentDidMount() {}

  handleJustifieCreation = async justifie => {
    alert(this.props.uuid);

    try {
      const rawResponse = await API.post(
        'justifies',
        {
          description: justifie.description,
          type: justifie.type,
          email: justifie.email,
          poItemUuid: this.props.uuid,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      ).catch(error => {
        throw error;
      });

      const content = await rawResponse;
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const { deop } = this.state;
    return (
      <div className="lb-justificativa">
        <div className="content">
          <h2>Justificativa</h2>
          {this.state.modalAddJust && (
            <JustifieForm onJustifieCreation={this.handleJustifieCreation} />
          )}

          {this.state.modalJust && <JustifieList />}

        </div>
        <div className="wrap-btns">
          <button type="button" className="btn abonar">
            Abonar
          </button>
          <button
            type="button"
            className="btn"
            onClick={() =>
              this.setState({ modalJust: false, modalAddJust: true })
            }
          >
            Adicionar
          </button>
          <button
            type="button"
            className="btn"
            onClick={() =>
              this.setState({ modalJust: true, modalAddJust: false })
            }
          >
            Justificativas
          </button>
        </div>
      </div>
    );
  }
}

export default justifieContainer;
