import http from 'k6/http';
import { sleep, check } from 'k6';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'))


export const options = {
  //vus: 10,
  //duration: '30s',
  // Define the number of iterations for the test
  iterations: 1,
  // stages: [
  //   { duration: '5s', target: 10 },
  //   { duration: '20s', target: 10 },
  //   { duration: '5s', target: 0 },
  // ],
   thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(90)<3000', 'max<5000'], // 95% of requests should be below 200ms
  },
};

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function () {
  const url = 'http://localhost:3000/login';
  postLogin.username = "junior.lima"
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

  check(res, {
    'Validar que o Status é 200': (r) => r.status ===200,
    'Validar que o Token é string': (r) => typeof(r.json().token) == 'string',
  });
  //const resposta = http.post(url, payload, params);
  //console.log(resposta);
  // Sleep for 1 second to simulate real-world usage
  sleep(1);
}