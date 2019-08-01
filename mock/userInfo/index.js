const { getUserInfo, editUserInfo } = require("./controls/index.js");
const userHandler = (app, baseUrl) => {
  app.get(`${baseUrl}/user/userInfo`, getUserInfo);
  app.post(`${baseUrl}/user/edit`, editUserInfo);
};

module.exports = userHandler;
