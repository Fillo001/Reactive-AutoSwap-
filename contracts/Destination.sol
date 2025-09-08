// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Destination {
    event DataReceived(uint256 value, address sender);

    function receiveData(uint256 value, address sender) external {
        emit DataReceived(value, sender);
    }
}
