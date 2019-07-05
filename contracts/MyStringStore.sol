pragma solidity >=0.5.0 <0.6.0;

/// @title ArCache
/// @author Truffle Framework
/// @notice This is a basic test for passing strings to the iOS Front End
/// @dev All function calls are currently implemented without known side effects

contract MyStringStore {
/// @author Jaeson Booker
/// @dev extremely basic
/// @param takes in a string
/// @return returns a string
  string public myString = "Welcome to the ArCache App";

  function set(string memory x) public {
    myString = x;
  }
}
