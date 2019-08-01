const Mock = require("mockjs");
const getJsonFile = require("../../util");
module.exports = {
  getUserInfo: function(req, res) {
    res.json(Mock.mock(getJsonFile(__dirname, "./user.json")));
  },
  editUserInfo: function(req, res) {
    console.log(req.body);
    res.json(req.body);
  }
};
