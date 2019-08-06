import styled from 'styled-components';

import imgChecked from '../../img/icons/icon-check.png';
import iconMostrar from '../../img/icons/icon-mostrar.png';
import iconOcultar from '../../img/icons/icon-ocultar.png';

const columnsSize = '2.5fr 1.5fr 1.5fr 0.5fr';

export const UserList = styled.div`
  p {
    font-size: 14px;
    line-height: 20px;
  }

  .btn.excluir {
    background-color: #ff5757;
  }
  .header {
    padding: 10px 20px;
    display: grid;
    align-items: center;
    grid-template-columns: ${columnsSize};
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    @media (max-width: 620px) {
      grid-template-columns: 1fr;
    }
  }
  .item {
    background: #f7f7f7;
    padding: 10px 20px;
    margin-bottom: 4px;
    font-size: 14px;
    display: grid;
    align-items: center;
    grid-template-columns: ${columnsSize};
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    @media (max-width: 620px) {
      grid-template-columns: 1fr;
    }
    .date {
      &.altered {
        color: red;
      }
      &.current {
        color: #666;
      }
    }
  }
`;

export const Box = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 6px;
  border-left: solid 7px #4c5062;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.16);
  margin-bottom: 30px;
  position: relative;
  transition: all ease 0.3s;
  display: none;
  transform: translate(0, -20px);
  opacity: 0;
  z-index: 9;
  &.active {
    display: block;
    transform: translate(0, 0);
    opacity: 1;
  }
  &:before {
    content: '';
    position: absolute;
    top: -6px;
    right: 50px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent #ffffff transparent;
  }
  form {
    /* float: inline-start; */
    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    label {
      display: block;
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 10px;
      text-align: left;
    }
    input,
    select {
      width: 200px;
      height: 50px;
      border: solid 1px #c2c2c2;
      box-sizing: border-box;
      border-radius: 6px;
      padding: 0 10px;
      font-size: 14px;
      font-weight: 300;
      transition: all ease 0.3s;
      &:focus {
        border: solid 1px #292d41;
      }
    }

    /* input[type='checkbox'] {
      width: 18px;
      height: 18px;
      appearance: none;
      padding: 0;
      border: solid 2px #929292;
      background-position: center;
      &:checked {
        background: url(../img/icons/icon-check.png) no-repeat center;
        border: solid 2px #292d41;
      }
    } */
    input[type='checkbox'] {
      width: 18px;
      height: 18px;
      appearance: none;
      padding: 0;
      border: solid 2px #dac9c9;
      background-position: center;
      cursor: pointer;
      /* margin-right: 20px; */
      &:checked {
        background: url(${imgChecked}) no-repeat center;
        border: solid 2px #292d41;
      }
    }
    .nfs {
      margin: 30px 10px 0px 10px;
      input {
        margin-right: 5px;
      }
      label {
        display: flex;
        align-items: center;
        font-size: 15px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .btn {
    height: 50px;
  }
  .item {
    margin-left: 15px;
    /* width: 100%; */
    /* margin-bottom: 10px; */
    /* input[type='email'] {
      height: 40px;
      width: 100%;
    }
    input[type='password'] {
      height: 40px;
      width: 100%;
    } */
  }

  @media (max-width: 950px) {
    form {
      flex-wrap: wrap;
    }
  }
  @media (max-width: 720px) {
    form {
      .nfs {
        margin: 10px 10px 0px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-bottom: 10px;
        border-bottom: solid 1px #ccc;
        margin-bottom: 10px;
        label {
          margin-bottom: 0;
        }
      }
      .item {
        width: 100%;
        margin-bottom: 10px;
        input[type='text'] {
          height: 40px;
          width: 100%;
        }
        input[type='email'] {
          height: 40px;
          width: 100%;
        }
        input[type='password'] {
          height: 40px;
          width: 100%;
        }
        .btn {
          width: 100%;
        }
      }
    }
  }
`;

export const Popup = styled.div`
  width: 860px;
  display: flex;
  h2 {
    font-size: 22px;
    margin-bottom: 40px;
  }
  .content {
    width: 70%;
    background: #fff;
    padding: 40px 60px;
  }
  .wrap-btns {
    width: 30%;
    background: #ccc;
    position: relative;
    padding: 40px 0;
    .btnclose {
      position: absolute;
      top: 10px;
      right: 20px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #4b4e60;
      color: #fff;
      cursor: pointer;
      font-size: 14px;
    }
  }
  .form-just {
    label {
      display: block;
      margin-bottom: 10px;
      font-size: 14px;
    }
    input,
    select,
    textarea {
      width: 100%;
      height: 50px;
      padding: 0 20px;
      border: 0;
      border: solid 1px #c2c2c2;
      box-sizing: border-box;
      border-radius: 6px;
    }
    textarea {
      height: 100px;
      resize: none;
      outline: none;
      padding: 20px;
    }
    .row {
      display: grid;
      margin-bottom: 20px;
      &.c2 {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
      }
      .item {
        width: 100%;
      }
    }
    .btn {
      height: 50px;
    }
  }
  .list-justificativas {
    .item {
      border-bottom: solid 1px #292d41;
      padding-bottom: 20px;
      margin-bottom: 20px;
      &:last-child {
        border-bottom: none;
      }
      p {
        font-size: 14px;
        color: #292d41;
        line-height: 20px;
        margin-bottom: 20px;
      }
      .user {
        display: flex;
        align-items: center;
        p {
          font-weight: bold;
          margin-right: 20px;
          margin-bottom: 0;
          &:last-child {
            margin-right: 0;
          }
        }
        input[type='checkbox'] {
          width: 18px;
          height: 18px;
          appearance: none;
          padding: 0;
          border: solid 2px #dac9c9;
          background-position: center;
          cursor: pointer;
          margin-right: 20px;
          &:checked {
            background: url(${imgChecked}) no-repeat center;
            border: solid 2px #292d41;
          }
        }
      }
    }
  }

  .wrap-btns {
    background: #292d41;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      width: 120px;
      height: 50px;
      margin-bottom: 10px;
      transition: all ease 0.1s;
      &.abonar {
        margin-bottom: 60px;
        background: #1ab1bc;
      }
      &:hover {
        background: transparent;
        border: solid 1px #fff;
      }
    }
  }
`;
export const BtnCadastrar = styled.button`
  border-radius: 6px;
  background: #1abc9c;
  border: solid 1px #1abc9c;
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  transition: 0.2s;
  &:hover {
    background: transparent;
    border: solid 1px #1abc9c;
    color: #1abc9c;
  }
`;

export const NewUsuario = styled.div`
  display: flex;
  justify-content: space-between;
  .boxcroped {
    width: calc(100% - 680px);
    height: 355px;
    position: relative;
  }
  form {
    max-width: 640px;
    width: 100%;
    margin-right: 40px;
    .item {
      margin-bottom: 20px;
      position: relative;
      &.iCropper {
        height: 400px;
      }
    }
    label {
      display: block;
      font-size: 14px;
      font-weight: 300;
      margin-bottom: 10px;
      text-align: left;
    }
    input,
    select {
      width: 100%;
      height: 50px;
      border: solid 1px #fff;
      box-sizing: border-box;
      border-radius: 6px;
      padding: 0 10px;
      font-size: 14px;
      font-weight: 400;
      transition: all ease 0.3s;
      &:focus {
        border: solid 1px #c2c2c2;
      }
    }
    input[type='file'] {
      height: auto;
      padding: 13px 12px;
      background: #fff;
    }
    input[type='checkbox'] {
      width: 18px;
      height: 18px;
      appearance: none;
      padding: 0;
      border: solid 2px #929292;
      background-position: center;
      &:checked {
        background: url(${imgChecked}) no-repeat center;
        border: solid 2px #292d41;
      }
    }
    .nfs {
      input {
        margin-right: 10px;
      }
      label {
        display: flex;
        align-items: center;
        font-size: 15px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export const BtnMostrar = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0;
  background: url(${iconMostrar}) no-repeat center;
  &.hide {
    background: url(${iconOcultar}) no-repeat center;
  }
`;
