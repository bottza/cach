# Cach
[![CircleCI](https://img.shields.io/circleci/project/github/arch-lord/cach/master.svg?style=flat-square)](https://circleci.com/gh/arch-lord/cach)
[![Depfu](https://img.shields.io/depfu/arch-lord/cach.svg?style=flat-square)](https://depfu.com/repos/arch-lord/cach) 
[![npm](https://img.shields.io/npm/v/cach.svg?style=flat-square)](https://www.npmjs.com/package/cach)

A simple program to restart your NodeJS app when it exits with an error.

## Installation

For global use:  
```
$ npm install -g cach
```

For local use:
```
$ npm install --save cach
```

## Usage

On the command line:
```
$ cach
Running `npm start`...

$ cach ember serve
Running `ember serve`...
```

In a script:
```javascript
var cach = require("cach");

// Runs npm start with cach
cach();

// Runs ember serve with cach
cach("ember serve");

// Runs npm test with cach,
// and also logs messages
cach("npm test", true);
```

## Testing

```
$ git clone https://github.com/arch-lord/cach
Cloning into 'cach'...
remote: Counting objects: 37, done.
remote: Compressing objects: 100% (32/32), done.
remote: Total 37 (delta 13), reused 23 (delta 3), pack-reused 0
Unpacking objects: 100% (37/37), done.

$ cd cach

$ npm test
> cach@1.0.0 test C:\Programming\cach
> ava

  4 tests passed
```