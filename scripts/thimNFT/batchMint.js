const hre = require("hardhat");
require("dotenv").config();

const { ACCOUNT_ADDRESS, CONTRACT_ADDRESS } = process.env;

async function main() {
  const ThimNFT = await hre.ethers.getContractFactory("ThimNFT");
  const thimNFT = ThimNFT.attach(CONTRACT_ADDRESS);

  const mintTx = await thimNFT.safeMint(5);
  await mintTx.wait();

  console.log(
    `${await thimNFT.balanceOf(
      ACCOUNT_ADDRESS
    )} ThimNFTs Minted to ${ACCOUNT_ADDRESS}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});