# Hello-Elm
Quick Elm Starter Kit with Webpack and webpack-dev-server

It took a bit of tinkering to get a simple Elm project working using the documentation I could find for elm-webpack-loader, so I made a very simple one based on the intro structure used in the [https://pragmaticstudio.com/elm](Pragmatic Studio tutorial) (with a src folder for added organization).

This doesn't provide ES6, SCSS, or any other kind of transpilatory goodness, but it should be easy to add.

## How to Use
### Installation
- Clone this repo!
- [Install Elm](https://guide.elm-lang.org/install.html) on your machine
- If you haven't already, you'll also need to install Node. This repo uses a nodenv version file, so installing with Nodenv is recommended. Plain installer is here: [https://nodejs.org/en/](https://nodejs.org/en/) 
- If you haven't already, install [https://yarnpkg.com/en/docs/install](Yarn) or NPM (which is part of Node already)

Gosh I thought this was easy! You're almost there.

### Setup
- Run `elm-package install` in the project directory (this will create a folder called `elm-stuff` that git will hide)
- Run `npm install` or `yarn install` in the project directory (this will create a folder called `node_modules` that git will hide)

OK! Now
### Run Webpack
- Run `webpack` to get a build folder with all the Elm bundled up into a neat little Javascript. You can now open index.html in your browser and see it there.
- Run `webpack-dev-server` to get a live reloading version of index.html at localhost:8080.
