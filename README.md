# Cach
[![Discord](https://img.shields.io/discord/490867255144611850.svg?style=flat-square)](https://discord.io/bottza)
[![Travis CI](https://img.shields.io/travis/com/bottza/cach/master.svg?style=flat-square)](https://travis-ci.com/bottza/cach)
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
$ git clone https://github.com/bottza/cach
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

## Comparison to PM2

Cach:
```
$ cach
Running `npm start`...
```
Ok. How do I stop it? `Ctrl-C` is intuitive...
```
^C
$ 
```
It worked!!!!

PM2:
```
$ pm2 start node main.js
[PM2] Spawning PM2 daemon with pm2_home=C:\Users\archmaster\.pm2
[PM2] PM2 Successfully daemonized
[PM2] Starting D:\Documents\Programmimg\BootBot\main.js in fork_mode (1 instance)
[PM2] Done.
┌──────────┬────┬──────┬───────┬────────┬─────────┬────────┬─────┬───────────┬───────┬──────────┐
│ App name │ id │ mode │ pid   │ status │ restart │ uptime │ cpu │ mem       │ user  │ watching │
├──────────┼────┼──────┼───────┼────────┼─────────┼────────┼─────┼───────────┼───────┼──────────┤
│ main     │ 0  │ fork │ 24268 │ online │ 0       │ 0s     │ 0%  │ 29.0 MB   │ felix │ disabled │
└──────────┴────┴──────┴───────┴────────┴─────────┴────────┴─────┴───────────┴───────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
 ```
 Wait AAAAAAAHHH so confusing! How do I know what's happening? How do I even stop it? It's not running in my terminal so I can't do `Ctrl-C`! *Reads help.* Sooo...
 ```
 $ pm2 stop 0
[PM2] Applying action stopProcessId on app [0](ids: 0)
[PM2] [node](0) ✓
┌──────────┬────┬──────┬─────┬─────────┬─────────┬────────┬─────┬────────┬───────┬──────────┐
│ App name │ id │ mode │ pid │ status  │ restart │ uptime │ cpu │ mem    │ user  │ watching │
├──────────┼────┼──────┼─────┼─────────┼─────────┼────────┼─────┼────────┼───────┼──────────┤
│ node     │ 0  │ fork │ 0   │ stopped │ 0       │ 0      │ 0%  │ 0 B    │ felix │ disabled │
└──────────┴────┴──────┴─────┴─────────┴─────────┴────────┴─────┴────────┴───────┴──────────┘
 Use `pm2 show <id|name>` to get more details about an app
 ```
 Well... it's stopped... but it's still showing up! Imma install `cach`.