## Commands run to build this:

1) create directory
2) npm init
3) hit enter a bunch of times
4) enter yes
5) package.json created


## Directory structure:

contracts
	- inbox.sol
	- other contracts if needed.sol

test
	- inbox.test.js

package.json
compile.js (compiles each contract in contracts)
deploy.js  (takes compiled code and deploys to a network)


____

Add solidity compiloer

____

node compile.js (in home directory)

____
create Ganache / TestRPC (old name of library
Utilize Web3 to see what's happening inside contract


----
install libraries

npm install --save mocha ganache-cli web3@1.0.0-beta.26

# Architecture

							Solidity Compiler
___________________	| ___________________
|																				|
Bytecode																ABI
|																				|
|																				|
Deploy																	|
|																				|
|																				|
Contract Instance <------------------- Web3
Ganache / TestRPC								
