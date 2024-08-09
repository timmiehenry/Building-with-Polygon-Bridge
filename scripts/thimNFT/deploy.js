const hre = require("hardhat");

async function main() {
  const thimNFT = await hre.ethers.deployContract("ThimNFT");

  console.log("ThimNFT address:", await thimNFT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});