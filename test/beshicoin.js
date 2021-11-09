const Beshicoin = artifacts.require("Beshicoin");

contract("Beshicoin Smart Contract", () => {
    it("Should deploy the smart contract properly", async () => {
        const beshicoin = await Beshicoin.deployed();
        console.log(beshicoin.address);
        assert(beshicoin.address !== "");
    });

    it("Should mint circulation supply to the minter account", async () => {
        const supply = await Beshicoin.circulation_supply;
        console.log(supply);
        assert(supply !== 0);
    });
});
