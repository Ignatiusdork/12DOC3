require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const QUICKNODE_HTTP_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
  // Define the sepolia network parameters here
    sepolia: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};