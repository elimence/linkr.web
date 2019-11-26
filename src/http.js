import axios from 'axios';

const api = {
  test: `http://localhost:9000/api/v1/`,
  live: "https://api.linkr.page/api/v1/",
};

const HTTP = axios.create({
  baseURL: api.live,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": ""
  }
});

export default HTTP;