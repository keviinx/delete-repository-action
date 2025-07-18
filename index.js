/**
 * @name Delete repository
 * @description Deletes a repository.
 * @author @f1lander
 */
const core = require('@actions/core');
const { Octokit } = require("@octokit/core");

async function run() {
  try {
    const owner = core.getInput('owner');
    const repo = core.getInput('repo');
    const accessToken = core.getInput('token');
    const githubAPIUrl = process.env.GITHUB_API_URL || 'https://api.github.com';

    const octokit = new Octokit({
      auth: accessToken,
      baseUrl: githubAPIUrl
    })

    await octokit.request('DELETE /repos/{owner}/{repo}', {
      owner,
      repo
    });

    core.info('Repository deleted.');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
