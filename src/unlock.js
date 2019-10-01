const github = require("@actions/github");
const core = require("@actions/core");

async function unlock() {
  const myToken = core.getInput("repo-token");
  const octokit = new github.GitHub(myToken);
  const context = github.context;

  await octokit.issues.unlock({
    owner: context.payload.repository.owner.login,
    repo: context.payload.repository.name,
    issue_number: context.payload.issue.number
  });
  
  return context.payload.issue.number;
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
