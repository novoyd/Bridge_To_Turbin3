import { Keypair } from "@solana/web3.js";

// Now create a new keypair, like so:
//Generate a new kaypair
let kp = Keypair.generate()
console.log(`You have generated a new Solana wallet:${kp.publicKey.toBase58()}`);
console.log(`Solana Wallet Secret Key: ${kp.secretKey}`);