import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../../../services/api';

import logo from '../../../img/logo.png';
import imgUser from '../../../img/user-header.png';

import { UserImage } from './styles';

export default function Header() {
  const [useruuid, setUserUuid] = useState(localStorage.getItem('USER_UUID'));
  const [userPhoto, setUserPhoto] = useState(imgUser);

  async function markAlertAsRead(alertObj) {
    await API.put(`alerts/read/`, {
      useruuid,
      alertuuid: alertObj.uuid,
    });
  }

  async function notifySucess(alertObj) {
    toast.success(alertObj.message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      onClick: () => markAlertAsRead(alertObj),
    });
  }

  async function showUnreadAlerts() {
    const alerts = await API.get(`alerts/user/unread/${useruuid}`);
    alerts.data.forEach(alert => {
      notifySucess(alert);
    });
  }

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
      await showUnreadAlerts();
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
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/gerencial">Gerencial </Link>
            <Link to="/operacional">Operacional </Link>
            <Link to="/import">Import</Link>
          </Route>
        </nav>
        <div className="user-header">
          <UserImage src={userPhoto} className="logo" alt="" />
          <div className="icon-menu" onClick={btnMenu}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  );
}
