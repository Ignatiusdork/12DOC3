const hre = require("hardhat");
const { ethers } = require("hardhat");

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  /*
    DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
    so whitelistContract here is a factory for instances of our Whitelist contract.
    */
  // here we deploy the contract
  const santasMathContract = await ethers.deployContract("SantasMath");
  // 10 is the Maximum number of whitelisted addresses allowed

  // wait for the contract to deploy of the whitelis contract
  await santasMathContract.waitForDeployment();

  // print the address of the deployed contract
  console.log("SantasMath:", santasMathContract.target);

  // sleep for 30 seconds while etherscan indexes the new contract deployment
  await sleep(30 * 1000); // 30s = 30 * 1000 milliseconds

  // Verify the contract on the etherscan
  await hre.run("verify:verify", {
    address: santasMathContract.target,
    constructorArguments: [],
  });
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  })