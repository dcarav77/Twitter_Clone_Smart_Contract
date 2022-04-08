require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/CHtBTPiimJXqp1wYfsmjhfzJ7Du5Hcw2',
      accounts: ['e5dc643cf1ccd3f67cf02a627acff5c00cce467231f38b26c6159044e24f3750'],
    }
  }
};
