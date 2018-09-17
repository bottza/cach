var exec = require("child_process").exec;
var chalk = require("chalk");

var cach = command => {
  exec(command, function(error, stdout, stderr) {
    if (error) {
      console.log(chalk.yellow("Command `${error.cmd}` failed with exit code ${error.code}."));
      console.log(chalk.redBright(error.toString().trim()));
      console.log(chalk.cyan("Restarting..."));
      console.log();
      cach(command);
    } else {
      console.log(chalk.green("Command `${command} exited cleanly."));
      console.log(chalk.cyan("Exiting..."));
      process.exit(0);
    }
  });
};

if (require.main === module) {
  var args = process.argv.slice(2);
  if (args.length == 0) {
    cach("npm start");
  } else {
    cach(args.join(" "));
  }
}

module.exports = cach;