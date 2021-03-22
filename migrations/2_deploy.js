const Dwitter = artifacts.require("dwitter");

module.exports = function (deployer) {
  deployer.deploy(Dwitter);
};