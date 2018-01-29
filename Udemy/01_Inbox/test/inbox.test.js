/*jshint esversion: 6 */

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //notice Cap W in Web3 (acts as constructor)

// const web3 = new Web3(ganache.provider()); //ganache test network provider gets swapped when you need a new network
const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts - need to study await and async more..
  // await is used because the transaction are not instant (hence asyc)
  accounts = await web3.eth.getAccounts();

  // User of of those accounts to deploy the contract
  //            tells web3 about what methods an Inbox contract has.
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    // tells web3 that we want to deploy a new copy of this contract
    .deploy({ data: bytecode, arguments: ['Hi There!'] })
    // instructs web3 to send out a transaction that creates this contract
    .send({ from: accounts[0], gas:'1000000' });
  inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys a contract', () =>{
    //if address exists, then contract was deployed, and success
    assert.ok(inbox.options.address);
    console.log(inbox);
  });

  it('has a default message', async () =>{
    const message = await inbox.methods.message().call();
    assert.equal(message, 'Hi There!')
  });

  it('can change the message', async () =>{
    await inbox.methods.setMessage('bye!').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye!');
  });
});

/*
npm run test should yield:
Inbox
[ '0x502315A198843C1001Aead99a47FaB5eF9767edc',
  '0x9f964C2763BE484FB67A8Cd5D93B5b53c1c8cCa2',
  '0xe2b76Fa2181E92639197506F00f60f4ddA225ff8',
  '0xa80583DE6f471Cb48723285a2645d4a8e43f3366',
  '0x056728954Bd798Fd128333B79E4b6e4CF0B47346',
  '0xF7Db72a0cA6687dbdeF4d352e047dAb8eDee317e',
  '0xf3E65F32c66E325fbe9B250C0f763B35b655845f',
  '0x0F408bAd9736f7BA65fc32c90411F82035808b59',
  '0x659a43aA4Bbd8fFFCc91bAA5633bB5a40F3a67A2',
  '0xCEf0db024A3FC8913D1C0141777430b2aB1643e3' ]
    ✓ deploys a contract


1 passing (67ms)






















//
// // Mocha testing example
// class Car {
//   park() {
//     return 'stopped';
//     }
//
//   drive() {
//     return 'vroom';
//   }
// }
//
//
//
//
// // testing scripts
// let car;
// beforeEach(() => {
//   console.log('running test....');
//   car = new Car();
// });
//
//
// describe('Car', () => {
//   it('can park function', () => {
//     assert.equal(car.park(), 'stopped');
//   });
//
//   it('can drive function', () =>{
//     assert.equal(car.drive(), 'vroom');
//   });
// });
//
//
// /*
//  to run this, add script to package.json
//  in scripts within package.json, "test": "mocha"
//  run command is npm run test
//  should return:
//
//  Car
// running test....
//    ✓ can park function
// running test....
//    ✓ can drive function
//
//
//  2 passing (24ms)
// */
