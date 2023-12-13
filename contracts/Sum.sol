// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SantasMath {
    uint256 private number1;
    uint256 private number2;

    function setNumbers(uint256 _number1, uint256 _number2) public {
        number1 = _number1;
        number2 = _number2;
    }

    function add() public view returns (uint256) {
        return number1 + number2;
    }
}