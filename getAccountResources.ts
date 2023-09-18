// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable no-console */
import dotenv from "dotenv";
dotenv.config();

import { AptosClient, AptosAccount, CoinClient, FaucetClient } from "aptos";

export const NODE_URL = process.env.APTOS_NODE_URL || "https://fullnode.devnet.aptoslabs.com";
export const FAUCET_URL = process.env.APTOS_FAUCET_URL || "https://faucet.devnet.aptoslabs.com";
export const APTOS_COIN = process.env.APTOS_COIN || "";

//<:!:section_1

export const aptosCoinStore = "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>";
export const fungibleStore = "0x1::fungible_asset::FungibleStore";

(async () => {
  // Create API and faucet clients.
  // :!:>section_1
  const client = new AptosClient(NODE_URL);
  const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL); // <:!:section_1

  // Create client for working with the coin module.
  // :!:>section_1a
  const coinClient = new CoinClient(client); // <:!:section_1a

  // Create accounts.
  // :!:>section_2
  const alice = new AptosAccount();
  const bob = new AptosAccount(); // <:!:section_2

  // Print out account addresses.
  console.log("=== Addresses ===");
  console.log(`Alice: ${alice.address()}`);
  console.log(`Bob: ${bob.address()}`);
  console.log("");

  // Fund accounts.
  // :!:>section_3
  await faucetClient.fundAccount(alice.address(), 100_000_000);
  await faucetClient.fundAccount(bob.address(), 0); // <:!:section_3

  console.log("======== ITERATE 100 times and check Balance for Alice ==================")
  let valid = 0
  let error = 0
  for (let i = 0; i < 100; i++) {
    try {
      console.log(`Request ${i}`);
      valid=valid+1;
    } catch(err) {
      error=error+1;    }
  }
  console.log(`From those 100 requests, ${valid} are valid and ${error} are errors`);

  console.log("======== ITERATE 100 times and check Balance for Bob ==================")
  valid=0;
  error=0;
  for (let i = 0; i < 100; i++) {
    try {
      console.log(`Request ${i}`);
      valid=valid+1;
    } catch(err) {
      error=error+1;    }
  }
  console.log(`From those 100 requests, ${valid} are valid and ${error} are errors`);
})();

