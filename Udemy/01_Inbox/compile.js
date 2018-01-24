/*jshint esversion: 6 */

// generates valid path regardles of OS
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// allows for export of what you get with the console.log version
module.exports = solc.compile(source, 1).contracts[`:Inbox`]; // we only care about the contracts bytecode
// console.log(solc.compile(source, 1));
console.log("________________________________________________\n");
console.log(solc.compile(source, 1).contracts[`:Inbox`]);
console.log("________________________________________________");



console.log(solc.compile(source, 1));
