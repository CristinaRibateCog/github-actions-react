import core from "@actions/core";
import github from "@actions/github";

try {
  // throw new error("some error message");
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  console.log(JSON.stringify(github, null, "\t"));
} catch (error) {
  core.setFailed(error);
}
