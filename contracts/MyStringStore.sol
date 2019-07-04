pragma solidity >=0.5.0 <0.6.0;

contract MyStringStore {
  string public myString = "Welcome to the ArCache App";

  function set(string memory x) public {
    myString = x;
  }
}
