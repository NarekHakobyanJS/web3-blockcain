// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Owner {
    address myBalance = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;

    function getBalance() public view returns(uint) {
        return myBalance.balance;
    }
}