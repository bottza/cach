var exec = require("child_process").exec;
var chalk = require("chalk");

var cach = (command = "npm start", log = false, restarted = false) => {
  var cmdLine = require.main === module;
  if (!command.trim()) {
    command = "npm start";
  }
  if (!restarted && (cmdLine || log)) {
    console.log(chalk.cyan("Running `${command}`..."));
  }
  exec(command, function(error, stdout, stderr) {
    if (error) {
      if (cmdLine || log) {
        console.log(chalk.yellow("Command `${error.cmd}` failed with exit code ${error.code}."));
        console.log(chalk.redBright(error.toString().trim()));
        console.log(chalk.cyan("Restarting..."));
        console.log();
      }
      cach(command, restarted = true);
    } else {
      if (cmdLine || log) {
        console.log(chalk.green("Command `${command} exited cleanly."));
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