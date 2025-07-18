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

    // --- DEBUGGING MESSAGES START ---

    core.info('--- Starting Repository Deletion Action ---');
    core.info(`Owner: ${owner}`);
    core.info(`Repository Name: ${repo}`);
    core.info(`GitHub API URL: ${githubAPIUrl}`);

    const octokit = new Octokit({
      auth: accessToken,
      baseUrl: githubAPIUrl
    })

    // Attempt the API request
    core.info(`Attempting to delete repository: ${owner}/${repo}`);
    
    await octokit.request('DELETE /repos/{owner}/{repo}', {
      owner,
      repo
    });

    core.info('Repository deleted.');
  } catch (error) {
    // --- ERROR DEBUGGING START ---

    core.error(`An error occurred: ${error.message}`);
    // Log the entire error object if available for more details
    if (error.request) {
      core.error(`Request URL: ${error.request.url}`);
      core.error(`Request Method: ${error.request.method}`);
      core.error(`Request Headers: ${JSON.stringify(error.request.headers)}`);
    }
    if (error.response) {
      core.error(`Response Status: ${error.response.status}`);
      core.error(`Response Headers: ${JSON.stringify(error.response.headers)}`);
      core.error(`Response Data: ${JSON.stringify(error.response.data)}`);
    }

    // --- ERROR DEBUGGING END ---
  }
}

run();
