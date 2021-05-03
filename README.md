# tsnodejs

Project to test and show Typescript features

## Initialize project

- `npm init`: init package.json (project info, dependences, run scripts ecc...)
- `npm install -D typescript && npm install -D tslint`: download latest Typescript version and linter
- `tsc --init`: config Typescript traspiling (set outDir and uncomment "moduleResolution": "node")
- `./node_modules/.bin/tslint --init`: configure Typescript linter
- configure package scripts

## Run package scripts

Scripts to run are:

- `npm run start-types`: for testing typing and block scope
- `npm run start-structures`: for testing class, interfaces, casting

## For module demo

- copy commented code con empty index.ts
