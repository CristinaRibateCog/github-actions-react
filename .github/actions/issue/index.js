const core = require("@actions/core");
const github = require("@actions/github");

try {
  const token = core.getInput("token");
  const title = core.getInput("title");
  const body = core.getInput("body");
  const assignees = core.getInput("assignees");

  const octokit = github.getOctokit(token);

  console.log("title", title);
  console.log("body", body);
  console.log("assignees", assignees, assignees.split("\n"));
  console.log("owner: ", github.context.repo.owner, "github.context.repository.owner.name");
  console.log("repo: ", github.context.repo.repo, "github.context.repository.name");
  console.log("github: ", github.context.repo);

  const response = octokit.rest.issues.create({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    title,
    body,
    assignees: assignees ? assignees.split("\n") : undefined
  });

  core.setOutput("issue", JSON.stringify(response.data));
} catch (error) {
  core.setFailed(error.message);
}
