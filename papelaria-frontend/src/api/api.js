import axios from 'axios';
import ENDPOINTS from './endpoints'

const api = axios.create({
  baseURL: ENDPOINTS.BASE_URL
})

export default api;