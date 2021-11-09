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

    let recept = await contract.methods
        .send_coins("0x1fDC9d3dbD08f341b043B7F0811e77BD10C38244", 3000)
        .call();

    // let balance = await contract.methods
    //     .check_balance("0x1fDC9d3dbD08f341b043B7F0811e77BD10C38244")
    //     .call();

    console.log(recept);
};

init();
