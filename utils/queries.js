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
      issues (last:50 orderBy: {field:UPDATED_AT direction:DESC} after: ) {
        totalCount
        nodes {
          id
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
  assignedIssues: user => `query {
    search(query:"assignee:${user} is:issue state:open",type:ISSUE,last:100) {
      issueCount
      nodes {
        ... on Issue {
          id
          number
          title
          url
          resourcePath
          repository {
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }`,
};
