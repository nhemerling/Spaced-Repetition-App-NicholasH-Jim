import config from '../config';
import TokenService from './token-service';

const SpacedRepetitionService = {
  getLanguageAndWords() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  getHeadWord() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },

  postGuess(guess) {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(guess),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

/*
postUser(user) {
  return fetch(`${config.API_ENDPOINT}/user`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((res) =>
    !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  );
},
postLogin({ username, password }) {
  return fetch(`${config.API_ENDPOINT}/auth/token`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then((res) =>
    !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
  );
},
refreshToken() {
  return fetch(`${config.API_ENDPOINT}/auth/token`, {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${TokenService.getAuthToken()}`,
    },
  }).then((res) =>
    !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  );
},*/

export default SpacedRepetitionService;
