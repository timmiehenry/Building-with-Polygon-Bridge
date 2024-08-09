const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const ThimNFT = await hre.ethers.getContractFactory("ThimNFT");
  const thimNFT = await ThimNFT.attach(CONTRACT_ADDRESS);

  const balance = await thimNFT.balanceOf(ACCOUNT_ADDRESS);
  console.log("Balance: ", balance.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});