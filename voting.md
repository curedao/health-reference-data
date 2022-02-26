## Democratic Pull Requests
When a Pull Request is made to the main branch, a new comment is posted on the PR where you can click :thumbsup: or :thumbsdown:. When a Pull Request is updated, it will clear the voting and restart the vote.

### Rules of Voting
[.voting.yml](.voting.yml) contains the rules of voting:
- `percentageToApprove` is the percentage of up-votes needed to approve a merge.
- `minVotersRequired` is the minimum number of unique voters needed to merge.
- `minVotingWindowMinutes` is the minimum amount of time that must pass after the voting comment is created before any vote can pass.

### Voters
[.voters.yml](.voting.yml) defines the allowed voters and their vote weights. Each entry has the format of `<github-user>:<voting-weight>`.

Contact m@thinkbynumbers.org to add your name to the voter list.
