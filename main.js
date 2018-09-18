#!/usr/bin/env node

var exec = require("child_process").exec;
var chalk = require("chalk");

var cach = (command = "npm start", log = false) => {
  var cmdLine = require.main === module;
  if (!command.trim()) {
    command = "npm start";
  }
  if (cmdLine || log) {
    console.log(chalk.cyan("Running `%s`..."), command);
  }
  exec(command, function(error, stdout, stderr) {
    if (error) {
      if (cmdLine || log) {
        console.log(chalk.yellow("Command `%s` failed with exit code %s."), error.cmd, error.code);
        console.log(chalk.redBright(error.toString().trim()));
        console.log(chalk.cyan("Restarting..."));
        console.log();
      }
      cach(command);
    } else {
      if (cmdLine || log) {
        console.log(chalk.green("Command `%s` exited cleanly."), command);
        console.log(chalk.cyan("Exiting..."));
      }
      if (cmdLine) {
        process.exit(0);
      } else {
        return;
      }
    }
  });
};

if (require.main === module) {
  var args = process.argv.slice(2);
  if (args.length == 0) {
    cach();
  } else {
    cach(args.join(" "));
  }
}

module.exports = cach;