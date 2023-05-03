const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const token = core.getInput("token");
    const title = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");

    const octokit = github.getOctokit(token);

    console.log("owner: ", github.context.repo.owner, github.context.repository.owner.name);
    console.log("repo: ", github.context.repository.name);

    const response = await octokit.rest.issues.create({
      owner: github.context.repository.owner.name,
      repo: github.context.repository.name,
      title,
      body,
      assignees: assignees ? assignees.split("\n") : undefined
    });

    core.setOutput("issue", JSON.stringify(response.data));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
