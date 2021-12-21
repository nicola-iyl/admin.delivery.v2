import axios from 'axios';

const instance = axios.create({
  baseURL: `http://api.inyourlifedelivery.it/api/`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },  
});

//codice per intercettare le chiamate con token non più valido
instance.interceptors.response.use(response => {
  return response;
}, error => {
 if (error.response.status === 401) {
  console.log('errore 401 --- non autorizzato');
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  window.location = '/login';
 }
 return error;
});
//fine

export default instance;