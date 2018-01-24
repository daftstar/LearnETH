// specifies version of solidity code - compiler looks for this version
pragma solidity ^0.4.17;


// Defines new contract (class) that holds methods and variables
contract Inbox {
    // Declares all of the instance variables (and their types)
    // that will exist in this contract.
    // These exist for the life of the contract.
    string public message;

    // Different functions that will be members of this contract
    // Becuse this has the same name as the contract, this is a
    // contstructor function. Automatically called 1 time when
    // contract deployed to blockchain.
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
