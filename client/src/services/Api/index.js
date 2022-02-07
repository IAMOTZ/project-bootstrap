import axios from 'axios';
import { setupMocking } from './mock';

const baseUrl = process.env.REACT_APP_API_BASE_URL;
const tokenName = process.env.REACT_APP_TOKEN_NAME;

class ApiService {
  constructor() {
    this.authToken = null;
    this.axiosInstance = axios.create({
      baseURL: `${baseUrl}`
    });

    if (localStorage.getItem(tokenName)) {
      this.setAuthHeader(localStorage.getItem(tokenName));
    }
  }

  isAuthenticated = () => {
    return !!this.authToken;
  }

  setAuthHeader = (token) => {
    this.authToken = token;
    this.axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
  }

  createData = async (body) => {
    return this.axiosInstance.post(
      `${baseUrl}/data`,
      body
    ).then(res => res.data);
  }

  fetchData = async ({ limit, offset }) => {
    return this.axiosInstance.get(
      `${baseUrl}/data`,
      { params: { limit, offset } }
    ).then(res => res.data);
  }

  fetchRealTimeData = async ({ limit, offset }) => {
    return this.axiosInstance.get(
      `${baseUrl}/data`,
      { params: { limit, offset } }
    ).then(res => res.data);
  }
}

const apiService = new ApiService();

// Mocking is done here just for the purpose of demo
setupMocking(apiService.axiosInstance);

export default apiService;