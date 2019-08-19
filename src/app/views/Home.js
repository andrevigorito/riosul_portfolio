import React, { Component, Fragment } from 'react';
import XLSX from 'xlsx';
import io from 'socket.io-client';
import { toast } from 'react-toastify';
import API from '../services/api';

// Images
import iconTitleDash from '../img/icons/title-dash.png';

// Components
import Loading from './components/Loading';
import Slideshow from './components/SlideShow';
import DragAndDrop from './components/DragAndDrop';

const socket = io('https://webcol.herokuapp.com');

class Home extends Component {
  state = {
    isConverting: false,
    isSending: false,
    isWaiting: false,
    importType: '',
  };


  render() {
    return (
      <div>
        <div className="center">
          <center>
            
              <h1>
                RIO SUL EQUIPAMENTOS
              </h1>
            
            <Slideshow />
            
            
                ALGUM TECOSDAKJH KAJSDHLKAJSHD LKAJSDHLKASJDHASL LKJHASDLKAJSHD AKSJDHALSKDJHASD LKJASHDLKAJSHD AKJSDHLAKJSDHASD
           
          </center>
        </div>
      </div>
    );
  }
}

export default Home;
