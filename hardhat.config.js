require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  solidity: '0.8.10',
  networks: {
    mumbai: {
      url: 'https://rpc.ankr.com/polygon_mumbai',
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      chainId: 1,
      url: 'https://rpc.ankr.com/eth_goerli',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};