# SDD_SmallProject
Small Project: Markdown Editor 

Everything in this project is WIP! including this readme!

# How to get up and running
1) Install `node` and `npm` through [this link](https://docs.npmjs.com/getting-started/installing-node).

2) Download Visual Studio Code [here](https://code.visualstudio.com)
    a. Once installed, install tools and languages for VSCode via the "Tools and Languages" option within the editor. Install the following (though you may want to install more:
    - HTML CSS Support
    - TypeScript
    - JavaScript
    - `Document This`
    - `angular2-inline`
    - `Node.js Modules Intellisense`
    - `Debugger For Chrome`
    
    Any additional ones are your choice :)
3) Next, I am using the [Angular CLI](https://github.com/angular/angular-cli) to create a new project. I ran the following commands, but you _do not_ have to do this. These commands create a new project called `MarkDownEditor`, navigate to the new directory made, and start the development server, respectively.
```cmd
ng new MarkDownEditor
cd MarkDownEditor
ng serve
```

You all should only have to run the last command, `ng serve`, in order to see output in your browser. This will start your development server on `localhost:4200`.

# Repository PR policy

## Adding changes
For every addition you would like to make, create a new `feature` branch off of the `dev` branch:
```
git checkout dev
git checkout -b feature/MyFeature
```
Make your changes locally, then stage and commit them. Once they are committed, push them to the remote repository. 

## Before pushing
Before pushing your branch to GitHub, please make sure to do the following things:

1) Update dev branch by switching to it. `git pull` fetches the remote and merges it into the current branch you're on (so, we'd need to switch into the branch we'd like to update).
    ```bash
    git checkout dev
    git pull origin dev 
    ```
    Doing this should just result in a [fast forward of the branch](https://confluence.atlassian.com/bitbucket/git-fast-forwards-and-branch-management-329977726.html), which is exactly what we want because it allows the git history to be more linear.

2) Switch back to your feature branch and rebase your changes on top of the most recent updates to dev.
    ```bash
    git checkout feature/feat_branch_name_here
    git rebase dev
    # For greater control, use git rebase -i dev
    ```
    why? When you push your branch to the remote repo, it will only include _your changes_, which makes commit history easier to read.

## Pushing
```bash
git push -u origin feature/feat_branch_name_here
```

## After pushing
1) If you've shared your branch on the remote repository, __do not rebase__ unless you know for certain nobody has pulled your branch. This rewrites history and causes some headaches for your teammates. Instead, if the dev branches have been updated since your pull request, pull in changes and create a merge commit.
2) Once the pull request gets approved, I've decided we're going to do *merge commits* (previously I was doing rebases) on shared branches (`dev` and `master`) when requesting to merge one of our feature branches into these two branches because:
    - we're all git noobs 
    - it allows for easier branch traceability and a more thorough commit history.
    - Though it means merge commit messages, I feel like the pros outweigh the cons.
