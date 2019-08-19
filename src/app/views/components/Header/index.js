import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../../../services/api';
import history from '../../../services/history';

import logo from '../../../img/logo.jpeg';
import imgUser from '../../../img/user-header.png';

import { UserImage } from './styles';

export default function Header() {
  const [useruuid, setUserUuid] = useState(localStorage.getItem('USER_UUID'));
  const [userPhoto, setUserPhoto] = useState(imgUser);

  



  async function getUser() {
    const response = await API.get(`users/${useruuid}`);

    const { photo } = response.data;

    if (photo !== 'photo') {
      setUserPhoto(photo);
    }
  }

  useEffect(() => {
    async function load() {
      await getUser();
      await setUserUuid(localStorage.getItem('USER_UUID'));
    }

    load();
  }, []);

  function btnMenu() {
    const menu = document.querySelector('.main-menu');
    menu.classList.add('ativo');
  }

  return (
    <header className="main-header">
      <div className="center">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className="main-nav">
          <Route>
            <Link to="/home">Home</Link>
            <Link to="/gerencial">Equipamentos</Link>
            <Link to="/operacional">Contatos</Link>
          </Route>
        </nav>
        {useruuid ?
          <div className="user-header">
            <UserImage src={userPhoto} className="logo" alt="" />
            <div className="icon-menu" onClick={btnMenu}>
              <span />
              <span />
              <span />
            </div>
          </div>
          :
          <Link to="/login">Login</Link>
        }
      </div>
    </header>
  );
}
