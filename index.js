const Web3 = require("web3");
const Beshicoin = require("./build/contracts/Beshicoin.json");

const init = async () => {
    const web3 = new Web3("HTTP://127.0.0.1:7545");

    const id = await web3.eth.net.getId();
    const deployedNetwork = Beshicoin.networks[id];
    const contract = new web3.eth.Contract(
        Beshicoin.abi,
        deployedNetwork.address
    );

    let receipt = await contract.methods
        .send_coins("0xd3a3460F5fb173A186B46cD4A7436C3Bea674C29", 3000)
        .call();

    let balance = await contract.methods
        .check_balance("0xd3a3460F5fb173A186B46cD4A7436C3Bea674C29")
        .call();

    console.log(balance);
};

init();
