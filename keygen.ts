import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58';
import prompt from 'prompt-sync';

//Generate a new keypair 
let kp = Keypair.generate()
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`) 
console.log(`[${kp.secretKey}]`)
const promptSync = prompt();
// You can call these functions like this:
// base58_to_wallet();
// wallet_to_base58();
function base58_to_wallet() {
    const base58 = promptSync("Enter your base58 private key: ");
    const wallet = bs58.decode(base58);
    console.log(Array.from(wallet));
}
function wallet_to_base58() {
    const walletInput = promptSync("201,217,44,232,229,157,42,67,41,255,240,210,88,223,123,75,234,100,146,73,38,86,251,9,24,101,138,245,209,172,223,143,216,237,46,215,224,224,228,140,24,94,190,237,36,127,82,101,0,242,196,36,2,173,15,9,220,241,160,42,42,92,201,157");
    const wallet = new Uint8Array(walletInput.split(',').map(num => parseInt(num.trim())));
    const base58 = bs58.encode(wallet);
    console.log(base58);
}
  