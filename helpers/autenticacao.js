import http from 'k6/http';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))
import { pegarBaseURL  } from '../utils/variaveis.js';

export function obterToken() {
const url = pegarBaseURL() + '/login';
  //http://localhost:3000
  //postLogin.username = "junior.lima"
  //console.log(postLogin);
  const payload = JSON.stringify(
    postLogin
  );

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);
  return res.json('token');
}