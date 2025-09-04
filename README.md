# DEX-challenge
Implementation of a basic decentralized exchange as part of the SpeedRunEthereum challenges

This project is my implementation of the [DEX challenge](https://speedrunethereum.com/challenge/dex) from SpeedRunEthereum.  
It demonstrates the design and deployment of a basic decentralized exchange with liquidity pools and token swaps.

## Features
- Swap between ETH and ERC20 tokens
- Add/remove liquidity to the pool
- Track pool reserves
- Simple UI for interaction

## Tech Stack
- **Solidity** (smart contracts)
- **Hardhat** (development & testing)
- **React + Next.js** (frontend)
- **Ethers.js** (contract interaction)
- **Scaffold-ETH** (boilerplate)



## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v20.18.3)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

📦 Environment 📚

> Start your local network (a blockchain emulator in your computer):

```sh
yarn chain
```

> in a second terminal window, 🛰 deploy your contract (locally):

```sh
yarn deploy
```

> in a third terminal window, start your 📱 frontend:

```sh
yarn start
```

📱 Open http://localhost:3000 to see the app.

> 👩‍💻 Rerun `yarn deploy` whenever you want to deploy new contracts to the frontend. If you haven't made any contract changes, you can run `yarn deploy --reset` for a completely fresh deploy.


>📜 Sepolia link: https://sepolia.etherscan.io/address/0x57cAbc01d13110c828eE288F14F1F06b64000F68
🔗 Versel link: https://dex-4bme7m80h-refreshmylifes-projects.vercel.app/


