// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Beshicoin is ERC20 {
    constructor(string memory name,string memory symbol) ERC20(name,symbol) {
        // 1.00 USD = 100 cents
        // 1.00 ETH = 10 ** 18 Wei (18 decimals) 
        _mint(msg.sender, 100 * 10 ** uint(decimals()));
    }
}