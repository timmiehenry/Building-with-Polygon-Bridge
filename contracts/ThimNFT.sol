// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract ThimNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("ThimNFT", "TNFT") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://plum-petite-marmoset-105.mypinata.cloud/ipfs/QmTE9uaWwCeuE7XhvxRWV5s929Dtycj19fqAURvuk1KajT/";
    }

    function promptDescription() external pure returns (string memory) {
        return "A collection of vintage bags";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}