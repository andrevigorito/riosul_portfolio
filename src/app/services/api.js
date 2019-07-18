import axios from 'axios';

export default axios.create({
  baseURL: `https://webcol.herokuapp.com/`,
});
