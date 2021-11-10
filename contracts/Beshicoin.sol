// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract Beshicoin {
    //initialise maximum supply
    uint public max_supply = 1000000;

    //initialise circulation supply;
    uint public circulation_supply = 0;

    //initialise minter address
    address public minter;

    //initialise minted status
    bool public minted_status = false;

    //initialise mapping for balance
    mapping(address => uint) public  balance;

    //set restrictor for sensitive operations
    modifier restricted() {
        require(msg.sender == minter);
        _;
    }
    
    constructor() {
        //set minter
        minter = msg.sender;

        //mint coins
        mint();
    }

    function mint() public restricted {
        //set minter reward
        uint minter_reward = 200000;

        //set minter holdings
        balance[minter] += minter_reward;

        //set minted_status
        minted_status = true;

        //update circulation supply
        circulation_supply += minter_reward;
    }

    //check balance in an account
    function check_balance(address _accountAddress) view public returns(uint) {
        return(balance[_accountAddress]);
    }

    //Set event for sent
    event Sent(address from, address to, uint amount);

    //set error condition
    error InsufficientBalance(uint requested, uint available);

    function send_coins(address _receiver, uint _amount) public {
        if(_amount > balance[msg.sender]){
            revert InsufficientBalance({
                requested: _amount,
                available: balance[msg.sender]
            });
        }

        balance[msg.sender] -= _amount;
        balance[_receiver] += _amount;
        emit Sent(msg.sender, _receiver, _amount);
    }

    //For Event Testing
    event Test(address _to,string _message);

    function test(address _account,string memory _message ) public {
        emit Test(_account,_message);
    }

}