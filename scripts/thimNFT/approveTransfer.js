const hre = require("hardhat");
require("dotenv").config();
const fxERC721RootContractABI = require("../../ERC721FxRootContractABI.json");

const { BRIDGE_ADDRESS, CONTRACT_ADDRESS, fxERC721RootAddress } = process.env;

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer);
  const ThimNFTFactory = await hre.ethers.getContractFactory(
    "ThimNFT"
  );
  const thimNFT = await ThimNFTFactory.attach(CONTRACT_ADDRESS);

  const fxRootContract = await hre.ethers.getContractAt(
    fxERC721RootContractABI,
    fxERC721RootAddress
  );

  // Approve NFTs for transfer
  const approveTx = await thimNFT
    .connect(deployer)
    .setApprovalForAll(fxERC721RootAddress, true);

  await approveTx.wait();

  console.log("NFT approval confirmed");

  // Deposit NFTs to Polygon Mumbai bridge
  for (let i = 0; i < 5; i++) {
    const depositTx = await fxRootContract
      .connect(deployer)
      .deposit(thimNFT.address, BRIDGE_ADDRESS, i, "0x6566");

    await depositTx.wait();
  }

  console.log("NFT deposited on Polygon Amoy");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});