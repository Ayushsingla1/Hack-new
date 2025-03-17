export const ABI =  [
    {
      "type": "constructor",
      "inputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "createHackathon",
      "inputs": [
        {
          "name": "_name",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_description",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_additionalDetails",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_poster",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_additionalLinks",
          "type": "string[]",
          "internalType": "string[]"
        },
        {
          "name": "_prizes",
          "type": "string[]",
          "internalType": "string[]"
        },
        {
          "name": "_openDate",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_endDate",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_totalPrize",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_themes",
          "type": "string[]",
          "internalType": "string[]"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "distributeWinners",
      "inputs": [
        {
          "name": "_winnersAddress",
          "type": "address[]",
          "internalType": "address payable[]"
        },
        {
          "name": "_amount",
          "type": "uint256[]",
          "internalType": "uint256[]"
        },
        {
          "name": "_hackathonId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple[]",
          "internalType": "struct MultiHackathonManager.TransferResult[]",
          "components": [
            {
              "name": "success",
              "type": "bool",
              "internalType": "bool"
            },
            {
              "name": "data",
              "type": "bytes",
              "internalType": "bytes"
            }
          ]
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getAllHackathons",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "tuple[]",
          "internalType": "struct MultiHackathonManager.HackathonInfo[]",
          "components": [
            {
              "name": "hackathonName",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "hackathonDescription",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "additionalDetails",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "hackathonPoster",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "additionalLinks",
              "type": "string[]",
              "internalType": "string[]"
            },
            {
              "name": "hackathonPrize",
              "type": "string[]",
              "internalType": "string[]"
            },
            {
              "name": "hackathonOpen",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "hackathonEnds",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "hackathonOwner",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "totalPrize",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hackathonTheme",
              "type": "string[]",
              "internalType": "string[]"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getHackathon",
      "inputs": [
        {
          "name": "_hackathonId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct MultiHackathonManager.HackathonInfo",
          "components": [
            {
              "name": "hackathonName",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "hackathonDescription",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "additionalDetails",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "hackathonPoster",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "additionalLinks",
              "type": "string[]",
              "internalType": "string[]"
            },
            {
              "name": "hackathonPrize",
              "type": "string[]",
              "internalType": "string[]"
            },
            {
              "name": "hackathonOpen",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "hackathonEnds",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "hackathonOwner",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "totalPrize",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "hackathonTheme",
              "type": "string[]",
              "internalType": "string[]"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getHackathonCount",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getHackathonSubmissions",
      "inputs": [
        {
          "name": "_hackathonId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple[]",
          "internalType": "struct MultiHackathonManager.Submission[]",
          "components": [
            {
              "name": "name",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "introduction",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "projectName",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "projectShortDescription",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "projectDescription",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "projectGithub",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "projectLink",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "walletAddress",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "userEmail",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "projectImages",
              "type": "string[]",
              "internalType": "string[]"
            },
            {
              "name": "category",
              "type": "string[]",
              "internalType": "string[]"
            },
            {
              "name": "demoVideo",
              "type": "string",
              "internalType": "string"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isOwner",
      "inputs": [
        {
          "name": "_address",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "submitProject",
      "inputs": [
        {
          "name": "_name",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_introduction",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_projectName",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_projectShortDescription",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_projectDescription",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_projectGithub",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_projectLink",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_walletAddress",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_userEmail",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_images",
          "type": "string[]",
          "internalType": "string[]"
        },
        {
          "name": "_demoVideo",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_category",
          "type": "string[]",
          "internalType": "string[]"
        },
        {
          "name": "_hackathonId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "updateHackathon",
      "inputs": [
        {
          "name": "_hackathonId",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "_name",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_poster",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_description",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_prizes",
          "type": "string[]",
          "internalType": "string[]"
        },
        {
          "name": "_additionalDetails",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_themes",
          "type": "string[]",
          "internalType": "string[]"
        },
        {
          "name": "_openDate",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_endDate",
          "type": "string",
          "internalType": "string"
        },
        {
          "name": "_additionalLinks",
          "type": "string[]",
          "internalType": "string[]"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdrawHackathon",
      "inputs": [
        {
          "name": "_hackathonId",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "TransferFailed",
      "inputs": [
        {
          "name": "recipient",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    }
  ]

export const ContractAddress = "0x8d140c3fD51781f5F6015f55a5B50a93855Ff9E4"