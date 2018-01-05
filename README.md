# Phaser 3 + Parcel

I wanted to see if I could get [Phaser 3](https://github.com/photonstorm/phaser/tree/master/v3) running with [Parcel](https://github.com/parcel-bundler/parcel). Looks like you can! The only catch is that you need to make sure the `CANVAS_RENDERER` and `WEBGL_RENDERER` global booleans are defined prior to importing Phaser. So this needed to have two entry points: `phaser-globals.js` which is put onto the page before `index.js`.

Clone the repo and install and run the project with these steps:
1. `yarn install`
1. `yarn dev`
1. Visit `localhost:1234`
