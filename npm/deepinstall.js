var shell = require("shelljs"),
  path = require("path"),
  async = require("async"),
  PRODUCTION_FLAG = "",
  getSubfolders,
  fs = require("fs"),
  pwd = shell.pwd();
const args = process.argv,
  PATH_TO_CODEGENS_FOLDER = path.resolve(__dirname, "../codegens");

if (args[2] && args[2] === "dev") {
  console.log("Dev flag detected running npm install");
} else {
  PRODUCTION_FLAG = "--prod";
}

getSubfolders = (folder) => {
  return fs
    .readdirSync(folder)
    .map((subfolder) => {
      return { path: path.join(folder, subfolder), name: subfolder };
    })
    .filter((obj) => {
      return fs.statSync(obj.path).isDirectory();
    });
};

async.series(
  [
    function (next) {
      console.log("Running pre-package script");
      var prepackagePath = path.resolve(__dirname, "pre-package.js"),
        commandOutput = shell.exec(`node "${prepackagePath}"`);

      if (commandOutput.code !== 0) {
        console.error(
          "Failed while running pre-package.js, here is the error:"
        );
        return next(commandOutput.stderr);
      }
      console.log("Run successful languages.js saved in lib/assets");
      return next();
    },
    function (next) {
      var codegens = getSubfolders(PATH_TO_CODEGENS_FOLDER);
      codegens.forEach((codegen) => {
        shell.cd(codegen.path);

        var commandOut;

        console.log(codegen.name + ": pnpm install " + PRODUCTION_FLAG);
        commandOut = shell.exec("pnpm install " + PRODUCTION_FLAG, {
          silent: true,
        });

        if (commandOut.code !== 0) {
          console.error(
            "Failed to run pnpm install on codegen " +
              codegen.name +
              ", here is the error:"
          );
          return next(commandOut.stderr);
        }
        console.log(commandOut.stdout);
      });
    },
  ],
  (err) => {
    if (err) {
      console.error(err);
    }
    shell.cd(pwd);
  }
);
