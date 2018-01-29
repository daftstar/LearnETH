/*jshint esversion: 6 */

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require ('web3');
const {interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'message olive rhythm denial ranch elegant history stumble logic uncover gesture pear',
  'https://rinkeby.infura.io/TnblgSkvYCu1ezzghvkS'
);

const web3 = new Web3(provider);
