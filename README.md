# GitHub Action to delete a Repository

This action can be used to delete a repository from your workflows.

Using Octokit to delete a repository from a organization or simple user.

This action is a fork of [f1lander/delete-repository-action](https://github.com/f1lander/delete-repository-action)

## Usage

```yaml
uses: keviinx/delete-repository-action@v1
with:
  owner: "YOUR_GITHUB_USERNAME"
  repo: "YOUR_REPO_NAME"
  access-token: "accessTokenWithRepoOrOrgAdminScope"
```
