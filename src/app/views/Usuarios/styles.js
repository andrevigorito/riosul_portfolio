import styled from 'styled-components';

import imgChecked from '../../img/icons/icon-check.png';

const columnsSize = '2fr 2fr 1.5fr 1fr 1fr';
export const UserList = styled.div`
  p {
    font-size: 14px;
    line-height: 20px;
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
`;
