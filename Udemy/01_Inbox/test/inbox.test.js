/*jshint esversion: 6 */

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //notice Cap W in Web3 (acts as constructor)
const web3 = new Web3(ganache.provider()); //ganache provider gets swapped when you need a new network


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
