# SDD_SmallProject
Small Project: Markdown Editor 

Everything in this project is WIP! including this readme!

## Quick Branching note
For every addition you would like to make, create a new branch off of the dev branch: first, `git checkout dev` then `git checkout -b feature/MyFeature`. Make your changes locally, then stage and commit them. Once they are committed, push them to the remote repository.

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

To be continued...