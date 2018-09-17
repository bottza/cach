var {test} = require("ava");
var chalk = require("chalk");

test("chalk.yellow exists", async test => {
  var thing = chalk.yellow;
  if (thing) {
    test.pass();
  } else {
    test.fail();
  }
});

test("chalk.cyan exists", async test => {
  var thing = chalk.cyan;
  if (thing) {
    test.pass();
  } else {
    test.fail();
  }
});

test("chalk.redBright exists", async test => {
  var thing = chalk.redBright;
  if (thing) {
    test.pass();
  } else {
    test.fail();
  }
});

test("chalk.green exists", async test => {
  var thing = chalk.green;
  if (thing) {
    test.pass();
  } else {
    test.fail();
  }
});
