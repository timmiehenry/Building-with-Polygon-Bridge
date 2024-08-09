const hre = require("hardhat");
require("dotenv").config();

const { CONTRACT_ADDRESS } = process.env;

async function main() {
  const ThimNFT = await hre.ethers.getContractFactory("ThimNFT");
  const thimNFT = ThimNFT.attach(CONTRACT_ADDRESS);

  console.log(await thimNFT.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});