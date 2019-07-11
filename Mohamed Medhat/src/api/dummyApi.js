import axios from 'axios';
import baseURL from '../db/database';

// make axios calls
export const dummyAPI = {
  getAll() {
    return axios.get(`${baseURL}/dummy/`);
  },
  getById(id) {
    return axios.get(`${baseURL}/dummy/${id}`);
  },
  add(item) {
    return axios.post(`${baseURL}/dummy/`, item);
  },
  update(id, item) {
    return axios.post(`${baseURL}/dummy/${id}`, item);
  },
  delete(id) {
    return axios.delete(`${baseURL}/dummy/${id}`);
  }
};
