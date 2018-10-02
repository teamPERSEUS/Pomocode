module.exports = {
  repoNames: `query {
    viewer {
      name,
      repositories(last:30) {
        nodes {
          name
        }
      }
    }
  }`,
};
