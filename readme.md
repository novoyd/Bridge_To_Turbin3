# Web3 Builders Alliance Solana Q2 2024

Transaction link:  
https://explorer.solana.com/tx/66xm6kEKhwZokzSB7uTab73rummAdYSo8wrwwLRXZr7goByGaTwNDHcw2ifXVw88kqXiEMfuDGrZ4v1of6RiZP61?cluster=devnet


## Project Overview

This repository contains a series of Solana development assignments demonstrating wallet creation, airdrop claiming, and program interaction on Solana's devnet.

### Key Files:

- `keygen.ts`: It Generates a new Solana keypair and saves it to `dev-wallet.json`
- `airdrop.ts`: Claims devnet SOL tokens using the generated wallet
- `transfer.ts`: Demonstrates SOL transfer between two wallets on devnet
- `enroll.ts`: Interacts with WBA's prerequisite program to verify course completion with our github usernames
- `programs/wba_prereq.ts`: Contains the wbraprereq type and the IDL definition along with the wbapreeq type over here

### Running the Project

1. Install dependencies:
```bash
yarn install
```
2. Generate your wallet:
```bash
yarn keygen
```
3. Request devnet SOL:

```bash
yarn airdrop
```
4. Transfer SOL:
```bash
yarn transfer
```
5. Complete enrollment:
```bash
yarn enroll
```
