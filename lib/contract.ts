export const contractAddress = "0xb222add3a8534e2924b2C5CCfc68267FBB94e069";

// Export only the ABI array expected by viem/wagmi
export const contractABI = [
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [],
				"name": "message",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "string",
						"name": "newMessage",
						"type": "string"
					}
				],
				"name": "updateMessage",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}
 ]as const;