Commands run to build this:

1) create directory
2) npm init
3) hit enter a bunch of times
4) enter yes
5) package.json created


Directory structure:

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
