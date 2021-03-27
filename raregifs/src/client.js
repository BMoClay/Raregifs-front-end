import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.baseURL = 'http://localhost:3000';
const token = localStorage.getItem("token");
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}