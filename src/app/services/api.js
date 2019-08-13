import axios from 'axios';

export default axios.create({
  baseURL: `https://toniato.herokuapp.com/`,
  // baseURL: `http://localhost:4000`,
});
