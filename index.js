var tasks = {};

// automatically add tasks here
tasks.createProject = require("./tasks/createProject/index.js").start;
tasks.exampleAsync = require("./tasks/exampleAsync/index.js").start;
tasks.exampleSync = require("./tasks/exampleSync/index.js").start;

module.exports = tasks;
