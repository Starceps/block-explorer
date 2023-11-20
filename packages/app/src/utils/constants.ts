import { checksumAddress } from "./formatters";

export const ETH_TOKEN_L2_ADDRESS = checksumAddress("0x000000000000000000000000000000000000800A");

export const NEW_PROVER_CLI_URL = "https://github.com/matter-labs/era-boojum-validator-cli";

export const PROXY_CONTRACT_IMPLEMENTATION_ABI = [
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
