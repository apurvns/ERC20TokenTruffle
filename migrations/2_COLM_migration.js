const COLM = artifacts.require("COLM");

module.exports = function (deployer) {
  deployer.deploy(COLM,"10000000000000000000000000000");
};