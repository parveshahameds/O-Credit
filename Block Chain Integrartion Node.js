const Web3 = require('web3');
const contractABI = require('./GreenTokenABI.json'); 
const contractAddress = '0xYourContractAddressHere';
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const contract = new web3.eth.Contract(contractABI, contractAddress);

function getTokenBalance(userAddress) {
  return contract.methods.balanceOf(userAddress).call();
}

function issueTokens(userAddress, amount) {
  return contract.methods.issueTokens(userAddress, amount).send({ from: '0xYourAdminAddressHere' });
}

module.exports = { getTokenBalance, issueTokens };
