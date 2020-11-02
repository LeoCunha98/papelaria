import axios from 'axios';
import endpoints from './endpoints'

const api = axios.create({
  baseURL: endpoints.BASE_URL
})

export default api;