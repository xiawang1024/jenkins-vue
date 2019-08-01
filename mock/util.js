const fs = require("fs");
const path = require("path");

const getJsonFile = (dirname, filePath) => {
  let json = fs.readFileSync(path.resolve(dirname, filePath), "utf-8");
  return JSON.parse(json);
};

module.exports = getJsonFile;
