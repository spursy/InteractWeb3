const InfoDemoContract = artifacts.require('./Info.sol');

module.exports = function(developer) {
    developer.deploy(InfoDemoContract);
}