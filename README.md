

Reactive AutoSwap is a decentralized application (dApp) that enables automated, cross-chain token swaps using Reactive Smart Contracts (RSCs). Unlike traditional DEX swaps where users must initiate transactions manually, AutoSwap listens to blockchain events and reacts instantly without user intervention.

Built on Reactive Network, it leverages event-driven automation to deliver seamless token swaps across Ethereum, BNB Smart Chain, Avalanche, Arbitrum, and other EVM-compatible blockchains.


🌍 Vision

Seamless cross-chain token swaps powered by autonomous reactive smart contracts.


📖 Problem Statement

Most decentralized exchanges (DEXs) require users to:

Constantly monitor token prices

Manually confirm swaps at the right time

Deal with delays, slippage, and high gas


This leads to missed opportunities and inefficiency.


💡 Solution

Reactive AutoSwap introduces event-driven token swaps that work without manual actions.

1. Origin Contract — Emits an event when a price or liquidity condition is met.


2. Reactive AutoSwap Contract — Listens for the event and triggers swap logic.


3. Destination Contract — Executes the actual token swap across chains or DEX pools.


4. Callback Payments — Funded by REACT tokens to sustain execution automatically.


This ensures trades are executed instantly, efficiently, and sustainably.

⚙️ Features

✅ Automated swaps triggered by conditions (e.g., price > $2,500)

✅ Cross-chain compatibility (Ethereum, BNB Chain, Avalanche, Arbitrum, etc.)

✅ Event-driven reactivity with RSCs

✅ Gas-efficient callback execution using REACT tokens

✅ Durable — runs indefinitely while funded

🛠 Tech Stack

Smart Contracts: Solidity, Reactive Smart Contracts

Deployment: Hardhat + Alchemy / Reactive RPC

Frontend: React.js + Ethers.js

Wallets: MetaMask

Network: Reactive Mainnet + Testnet

🔄 Workflow

1. User sets a condition (e.g., “Swap 1 ETH → USDC if ETH > $2,500”).


2. Origin Contract emits an event once condition is satisfied.


3. Reactive AutoSwap listens for this event and reacts automatically.


4. Destination Contract executes the swap on a chosen DEX/pool.


5. REACT tokens fund the callbacks to keep the process alive.


Result → Fully automated token swap without human intervention.


📜 Deployment

🔹 Requirements

Node.js & npm

Hardhat

MetaMask wallet (with ETH/REACT test tokens)

Alchemy API key or Reactive RPC endpoint

🏆 Value Proposition

Reactive AutoSwap demonstrates how Reactive Smart Contracts can achieve:

Automation → No manual triggers required

Scalability → Cross-chain swaps work seamlessly

Efficiency → Optimized through callback funding

Durability → Runs as long as contracts are funded


This is impossible to achieve with traditional smart contracts alone.


📅 Hackathon Info

Event: BUIDL with REACT

Deadline: September 30, 2025

Prize Pool: $50,000

Tracks: Innovation Track (main) + DeFi Automation

📹 Demo & Presentation

📌 To be included before final submission.


📬 Contact

Team Name: Reactive AutoSwap Builders

Lead Dev: Suleiman Idris

Email: suleimanidris04@gmail.com

Telegram: Reactive Devs

