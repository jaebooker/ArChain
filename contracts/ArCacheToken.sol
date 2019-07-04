pragma solidity >=0.5.0 <0.6.0;

/// @title ArCache
/// @author Jaeson Booker
/// @notice You can use this contract for generating ERC721 tokens to represent object
/// in augmented reality
/// @dev All function calls are currently implemented without known side effects

import './node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
import './node_modules/openzeppelin-solidity/contracts/token/ERC721/Ownable.sol';
import "./node_modules/openzeppelin-solidity/math/SafeMath.sol";

contract ArCacheToken is ERC721Token, Ownable {
  /// @author Jaeson Booker
  /// @notice Inherists from Openzeppelin's ERC721 Token
  /// @dev could find better, more decentralized way of handling token minting
  /// @param uses SafeMath and Openzeppelin
  /// @return mints tokens that describe texture and type for mobile UI yet to be fully implemented
  using SafeMath for uint256;
  //private erc address
  bytes4 private constant _ERC721_RECEIVED = 0x150b7a02;

  // Mapping from token ID to owner
  mapping (uint256 => address) private _tokenOwner;
  constructor() ERC721("ArCache Token", "ARCT") public {}

  owner = msg.sender

  //object struct, containing texture and type (sword, coin, etc.)
  struct Object {
    uint8 texture;
    uint8 type;
  }
  //storing all objects in an array
  Object[] objects;
  //custom mint function, creating an randomization for texture and type
  function mint() public {
    Object memory _object = Object(uint8(now), uint8(now-1000));
    uint _id = objects.push(_object) - 1;
    //mints to special address, so people can't create and own tokens outside of mobile app
    _mint(_ERC721_RECEIVED, _id);
  }
  //this function will be called by app, transferring from special address to user
  //this way people have to actually go to the location of an ArCache, rather than cheating by simply
  //calling the mint() function on the contract
  function transferFrom(address from, address to, uint256 tokenId) public {
      require(owner == _ERC721_RECEIVED)
      _transferFrom(address from, address to, uint256 tokenId)
  }

  //will get the visual for the object that will be used for the mobile application
  function getObjectVisualFromId(uint id) public view returns(uint8, uint8) {
    return (objects[id].texture, objects[id].type);
  }
}
