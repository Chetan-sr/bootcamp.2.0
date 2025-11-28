# Project.sol — Simple Message Storage Smart Contract

## **Contract Address**
**0xb222add3a8534e2924b2C5CCfc68267FBB94e069**  
Explorer: https://coston2-explorer.flare.network/address/0xb222add3a8534e2924b2C5CCfc68267FBB94e069

---

## **Description**
`Project.sol` is a beginner-friendly smart contract deployed on the Flare Coston2 testnet.  
It stores a simple on-chain message that can be updated only by the wallet that deployed the contract (the owner).

This project includes a complete frontend integration using **Next.js + Wagmi + Viem**, allowing users to:

- Read the current on-chain message
- Check the contract owner's address
- Update the message (owner only)
- View transaction statuses in real time

This makes the project ideal for learning blockchain fundamentals, including smart contract deployment, ABI usage, wallet integration, and contract interaction.

---

## **Features**
### ✅ Smart Contract  
- Stores a public string `message`
- Tracks the contract `owner`
- Allows only the owner to update the message
- Secure through a simple `require(msg.sender == owner)` check

### ✅ Frontend (Next.js + Wagmi)
- Wallet-gated UI (user must connect wallet to interact)
- Read the stored message instantly
- Update the message through on-chain transaction
- Real-time transaction status:
  - Pending
  - Confirming
  - Confirmed
  - Error handling

### ✅ Developer-Friendly
- Clean React hook: `useProjectContract`
- Strong TypeScript typings
- Simple integration example (`sample.tsx`)
- Minimal configuration required

---

## **How It Solves**
### 🎯 **The Problem**
Blockchain beginners struggle to understand:
- How to interact with a deployed contract
- How to read/write on-chain data
- How wallet connections work
- How to manage transactions and loading states

Most tutorials are too technical or too large in scope.

---

### 🛠️ **The Solution**
This project provides a **small, self-contained example** that demonstrates the full cycle:
1. Reading on-chain data  
2. Writing on-chain data (transactions)  
3. Handling wallet connections  
4. Displaying contract state in real time  
5. Managing loading, confirmation, and error UI states  

---

### 🌟 **Use Cases & Benefits**
- Great for blockchain students and beginners
- Helps understand ABI → Hook → UI flow
- Useful starter template for bigger dApps
- Easy to modify for your own contract logic
- Works out-of-the-box on Flare testnet

---

## 🚀 Start learning, customizing, and expanding!
This repository gives you everything needed to build your first functional dApp using Solidity + Next.js.


