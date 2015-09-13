// =========== [ REQUIRE ] ===========
var co = require("co");
var spawn = require("dm-shell").spawn;
var dmPrompt = require("dm-prompt").Inquirer;

// =========== [ VAR ] ===========
var task = {};

// =========== [ ASYNC task.start() ] ===========
task.start = co.wrap(function*(p1) {
  try {
    var p1 = p1 || process.argv[3] || undefined;

    // =========== [ get project name ] ===========
    var projectNameAnswer =
      yield dmPrompt({
        type: "input",
        name: "projectName",
        message: "Enter Project Name"
      });
    var projectName = projectNameAnswer.projectName;

    // =========== [ clone docker boilerplate ] ===========
    var command = "git clone --recursive https://github.com/webdevops/TYPO3-docker-boilerplate.git " + projectName;
    spawn(command);

    // =========== [ download typo3 ] ===========
    var typo3VersionAnswer =
      yield dmPrompt({
        type: "input",
        name: "typo3Version",
        message: "Please enter a typo3 version. for example 7.4 (default 6.2.15)"
      });
    var typo3Version = typo3VersionAnswer.typo3Version;
    console.log(typo3Version);
    if (typo3Version === "") {
      typo3Version = "6.2.15";
    }
    console.log(typo3Version);

    var command = "wget -P " + projectName + "/code"+ " https://github.com/divramod/typo3-installer/raw/master/typo3_src-" + typo3Version + ".tar.gz";
    spawn(command);

    // =========== [ unpack typo3 ] ===========
    var command = "tar -zxvf " + projectName + "/code/typo3_src-" + typo3Version + ".tar.gz -C " + projectName + "/code";
    spawn(command);

    // =========== [ move typo3_src ] ===========
    var command = "mv " + projectName + "/code/typo3_src-" + typo3Version + " " + projectName + "/code/typo3_src";
    spawn(command);

    // =========== [ link ] ===========
    // https://docs.typo3.org/typo3cms/InstallationGuide/QuickInstall/GetAndUnpack/Index.html
    var command = "ln -s " + projectName + "/code/typo3_src/index.php " + projectName + "/code/index.php";
    spawn(command);
    var command = "ln -s " + projectName + "/code/typo3_src/typo3 " + projectName + "/code/typo3";
    spawn(command);

    // =========== [ rm tar.gz ] ===========
    var command = "rm " + projectName + "/code/typo3_src-" + typo3Version + ".tar.gz";
    spawn(command);

    //TODO
    // =========== [ start ] ===========
    var command = "cd " + projectName + " && sudo docker-compose up -d";
    spawn(command);

    //TODO
    // =========== [ open browser ] ===========
    var command = "google-chrome localhost:8000";
    spawn(command);

    return yield Promise.resolve(p1);
  } catch (e) {
    console.log("Filename: ", __filename, "\n", e.stack);
    return yield Promise.resolve(e);
  }
}); // task.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
