require('dotenv').config();
const axios = require('axios');

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;
const gitHubOAuth = 'https://github.com/login/oauth';
const gitHubCode = `/authorize?client_id=${GITHUB_CLIENT_ID}&scope=repo`;
const gitHubAPI = 'https://api.github.com/graphql';
const gitCodeURL = gitHubOAuth + gitHubCode;

// retrieve github token to use API
const gitToken = (code) => {
  const tokenParams = {
    client_id: GITHUB_CLIENT_ID,
    client_secret: GITHUB_CLIENT_SECRET,
    code,
  };

  const tokenHeader = {
    headers: {
      Accept: 'application/json',
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(`${gitHubOAuth}/access_token`, tokenParams, tokenHeader)
      .then(({ data }) => {
        resolve(data.access_token);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// Query github API v4(GraphQL)
const gitQuery = (token, query) => {
  const queryHeader = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .post(gitHubAPI, { query }, queryHeader)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports.gitCodeURL = gitCodeURL;
module.exports.gitToken = gitToken;
module.exports.gitQuery = gitQuery;
