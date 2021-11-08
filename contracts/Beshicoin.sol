// Beshicoin ICO

//Version of Compiler
pragma solidity >=0.4.22 <0.9.0;

contract Beshicoin {
        
    // Maximum Supply
    uint public max_beshicoin = 1000000;
    
    //USD to Beshicoin Conversion Rate
    uint public usd_to_beshicoin = 1000;
    
    //Total number of beshicoins bought by investors
    uint public total_beshicoin_bought = 0;
    
    //Mapping from the investor address to its equity in Beshicoins and USD
    mapping(address => uint) equity_beshicoin;
    mapping(address => uint) equity_usd;
    
    //Checking if investor can buy beshicoin 
    modifier can_buy_beshicoin(uint usd_invested) {
        require (usd_invested * usd_to_beshicoin + total_beshicoin_bought <= max_beshicoin);
        _;
    }
    
    //Getting equity in beshicoin of investor
    function equity_in_beshicoin(address investor) external returns(uint) {
        equity_beshicoin[investor];
    } 
    
    //Getting equity in usd of investor
    function equity_in_usd(address investor) external returns(uint) {
        equity_usd[investor];
    }
    
    //Buy Beshicoin 
    function buy_beshicoin(address investor, uint usd_invested) external
    can_buy_beshicoin(usd_invested) {
        uint beshicoins_bought = usd_invested * usd_to_beshicoin;
        equity_beshicoin[investor] += beshicoins_bought;
        equity_usd[investor] = equity_beshicoin[investor]/usd_to_beshicoin;
        total_beshicoin_bought += beshicoins_bought;
    }
    
    //Selling Beshicoin 
    function sell_beshicon(address investor, uint beshicoin_sold) external {
        equity_beshicoin[investor] -= beshicoin_sold;
        equity_usd[investor] = equity_beshicoin[investor]/usd_to_beshicoin;
        total_beshicoin_bought -= beshicoin_sold; 
    }
    
} 