const Beshicoin = artifacts.require("Beshicoin");

contract("Beshicoin Smart Contract", () => {
    it("Should deploy the smart contract properly", async () => {
        const beshicoin = await Beshicoin().deployed();
        console.log(beshicoin.address);
        assert(beshicoin.address !== "");
    });

    it("Should retrun token name and symbol", async () => {
        const name = await Beshicoin.name;
        assert(name !== null);
    });
});
