const github = require("@actions/github");
const core = require("@actions/core");

async function unlock() {
  const myToken = core.getInput("repo-token");
  const octokit = new github.GitHub(myToken);
  const context = github.context;
  
  const issue = core.getInput("issue-number") || context.payload.issue.number;
  const repo = core.getInput("repo-name") || context.payload.repository.name;
  const owner = core.getInput("owner-name") || context.payload.repository.owner.login;

  console.log("Attempting to unlock " + owner + "/" + repo + "/issues/" + issue);
  
  await octokit.issues.unlock({
    owner: owner,
    repo: repo,
    issue_number: parseInt(issue)
  });
  
  return issue;
}

unlock()
  .then(
    result => {
      console.log(`Unlocked issue #${result}.`);
    },
    err => {
      console.log(err);
    }
  )
  .then(() => {
    process.exit();
  });
