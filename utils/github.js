require('dotenv').config();
const axios = require('axios');

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;
const gitHubOAuth = 'https://github.com/login/oauth';
const gitHubCode = `/authorize?client_id=${GITHUB_CLIENT_ID}&scope=repo`;
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
  return axios.post(`${gitHubOAuth}/access_token`, tokenParams, tokenHeader);
};

module.exports.gitCodeURL = gitCodeURL;
module.exports.gitToken = gitToken;
