const Web3 = require("web3");
const Beshicoin = require("./build/contracts/Beshicoin.json");

const init = async () => {
    const web3 = new Web3("http://127.0.0.1:9545");

    const id = await web3.eth.net.getId();
    const deployedNetwork = Beshicoin.networks[id];
    const contract = new web3.eth.Contract(
        Beshicoin.abi,
        deployedNetwork.address
    );

    const balance = await contract.methods
        .balanceOf("0xd4150574d5d17d660c26d6fd6ef9b9bb05c54c5b")
        .call();

    const actualBalance = balance / 10 ** 18;

    console.log(actualBalance);
};

init();
