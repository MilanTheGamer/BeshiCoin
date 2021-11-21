const Beshicoin = artifacts.require("Beshicoin");

module.exports = function (deployer) {
    deployer.deploy(Beshicoin, "Beshicoin", "BSHI");
};
