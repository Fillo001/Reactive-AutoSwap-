// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Origin {
    event DataSent(uint256 value, address sender);

    function sendData(uint256 value) external {
        emit DataSent(value, msg.sender);
    }
}
