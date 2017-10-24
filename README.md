# SDD_SmallProject
Small Project: Markdown Editor 

Everything in this project is WIP! including this readme!

# How to get up and running
1) Install `node` and `npm` through [this link](https://docs.npmjs.com/getting-started/installing-node).
    
2) Next, I am using the [Angular CLI](https://github.com/angular/angular-cli). Please make sure you have this by installing `npm install -g @angular/cli`.

3) install all the necessary components by doing `npm install` in the project directory, which will install all needed packages from the package.json file :smile:.

4) After installing all the necessary node packages, please use the command `ng serve` to build and run localhost.

You all should only have to run the last command, `ng serve`, in order to see output in your browser. This will start your development server on `localhost:4200`.

## Testing note
Though we are still working on tests, you should be able to view the output of our various Karma/Protractor/etc. tests by running:
 `ng test` OR `npm test`.

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

3) Run available tests by using `ng test` and make sure they pass!

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
    
## Generating Components, Directives and Services (From Angular-CLI documentation)

You can use the `ng generate` (or just `ng g`) command to generate Angular components:

```bash
ng generate component my-new-component
ng g component my-new-component # using the alias

# components support relative path generation
# if in the directory src/app/feature/ and you run
ng g component new-cmp
# your component will be generated in src/app/feature/new-cmp
# but if you were to run
ng g component ../newer-cmp
# your component will be generated in src/app/newer-cmp
# if in the directory src/app you can also run
ng g component feature/new-cmp
# and your component will be generated in src/app/feature/new-cmp
```
You can find all possible blueprints in the table below:

Scaffold  | Usage
---       | ---
[Component](https://github.com/angular/angular-cli/wiki/generate-component) | `ng g component my-new-component`
[Directive](https://github.com/angular/angular-cli/wiki/generate-directive) | `ng g directive my-new-directive`
[Pipe](https://github.com/angular/angular-cli/wiki/generate-pipe)           | `ng g pipe my-new-pipe`
[Service](https://github.com/angular/angular-cli/wiki/generate-service)     | `ng g service my-new-service`
[Class](https://github.com/angular/angular-cli/wiki/generate-class)         | `ng g class my-new-class`
[Guard](https://github.com/angular/angular-cli/wiki/generate-guard)         | `ng g guard my-new-guard`
[Interface](https://github.com/angular/angular-cli/wiki/generate-interface) | `ng g interface my-new-interface`
[Enum](https://github.com/angular/angular-cli/wiki/generate-enum)           | `ng g enum my-new-enum`
[Module](https://github.com/angular/angular-cli/wiki/generate-module)       | `ng g module my-module`

angular-cli will add reference to `components`, `directives` and `pipes` automatically in the `app.module.ts`. If you need to add this references to another custom module, follow this steps:
 
 1. `ng g module new-module` to create a new module
 2.  call `ng g component new-module/new-component`
 
This should add the new `component`, `directive` or `pipe` reference to the `new-module` you've created.
