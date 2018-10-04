module.exports = {
  repoNames: `query {
    viewer {
      name,
      repositories(last:50) {
        nodes {
          id
          name
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }`,
  fileStructure: {
    query: `query ($path:String, $repo:String!){
    viewer{
      repository(name: $repo) {
        object(expression: $path) {
          ... on Tree {
            entries {
              type
              name
            }
          }
        }
      }
    }
  }`,
    variables: {
      path: 'master:',
      repo: 'Pomocode',
    },
  },
  issues: `query {
    viewer {
      issues (first:50 after: ) {
        totalCount
        nodes {
            repository {
              name
            }
            number
            title
            updatedAt
            closedAt
            body
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }`,
};
