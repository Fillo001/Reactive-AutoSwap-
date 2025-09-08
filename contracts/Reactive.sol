// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IDestination {
    function receiveData(uint256 value, address sender) external;
}

contract Reactive {
    address public destination;

    constructor(address _destination) {
        destination = _destination;
    }

    function reactToEvent(uint256 value, address sender) external {
        IDestination(destination).receiveData(value, sender);
    }
}
