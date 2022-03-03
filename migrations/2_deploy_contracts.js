var EventTickets = artifacts.require("./EventTickets.sol");

module.exports = function(deployer) {
  deployer.deploy(EventTickets);
};