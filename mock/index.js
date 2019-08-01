const userHandler = require("./userInfo/index.js");

const BaseUrl = process.env.VUE_APP_BASE_API;

const bodyParser = require("body-parser");

const getUserInfo = app => {
  app.use(bodyParser.json());

  userHandler(app, BaseUrl);
};

module.exports = getUserInfo;
