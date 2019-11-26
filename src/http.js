import axios from 'axios';

const api = {
  test: `http://localhost:9000/api/v1/`,
  live: "http://api.linkr.page/api/v1/",
};

const HTTP = axios.create({
  baseURL: api.test,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": ""
  }
});

export default HTTP;