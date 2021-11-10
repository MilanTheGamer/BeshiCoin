const Web3 = require("web3");
const Beshicoin = require("./build/contracts/Beshicoin.json");

const init = async () => {
    const web3 = new Web3("http://127.0.0.1:7545");

    const id = await web3.eth.net.getId();
    const deployedNetwork = Beshicoin.networks[id];
    const contract = new web3.eth.Contract(
        Beshicoin.abi,
        deployedNetwork.address
    );

    await contract.methods
        .send_coins("0x3C9E5007AC6BB2CFd2Be108535Fb6F8d8489d709", 3500)
        .call();

    let balance = await contract.methods
        .check_balance("0xd36f6aC95b11a25B319D4C3c0fcc9fAFAf61e725")
        .call();

    console.log(balance);

    //for testing
    await contract.methods
        .test("0x3C9E5007AC6BB2CFd2Be108535Fb6F8d8489d709", "HELLO THERE")
        .call();

    //Subscribe to test event
    contract.events.Test((error, log) => {
        if (error) {
            console.log(error);
        }

        console.log(log);
    });
};

init();
