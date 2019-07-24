import { Application, Context } from 'probot' // eslint-disable-line no-unused-vars

//C:\Users\shawn\OneDrive\Documents\GitHub\silk-ai\quilter\node_modules\@octokit\rest\index.d.ts
/*export = (app: Application) => {
  app.on('pull_request.opened', async (context) => {
    console.log("MY NAME JEFF");
    context.log('New PR received')
    const issueComment = context.issue({ body: 'Hello World!' })
    await context.github.issues.createComment(issueComment)
  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}*/

module.exports = (app: Application) => {
  app.log("APP STARTED AND IS LOOKING AT THIS");
  app.on('pull_request', async (context: Context) => {
    // `context` extracts information from the event, which can be passed to
    // GitHub API calls. This will return:
    //   { owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World !}
    const pr = context.payload.pull_request;
    
    const params = {
      sha: pr.head.sha,
      context: 'masacaca',
      state: '"failure"',
      description: "You're straight up cringe bro"
    }
    context.log("Yo I got hit");
    // Post a comment on the issue
    const res = await context.github.repos.createStatus(context.repo({sha: pr.head.sha, context: 'masacaca', state: 'failure', description: 'straight up cringe bro'}));
    //const res = await context.github.checks.create();
  })
}
