import express from "express";
import cors from "cors";
import {ethers} from "ethers";
import "dotenv"

require("dotenv").config();
// Create Express app
const app = express();
app.use(express.json());
app.use(cors());

// Environment variables
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = "https://rpc.open-campus-codex.gelato.digital";
const PORT = 3001;

// Initialize provider and wallet with ethers v6
const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY || "", provider);

// Single route for transferring exactly 0.1 ETH

//@ts-ignore
app.post('/api/transfer', async (req, res) => {
  try {
    const { to } = req.body;
    if (!to || !ethers.isAddress(to)) {
      return res.status(400).json({ error: 'Invalid recipient address' });
    }
    
    const value = ethers.parseEther('0.1');
    
    const tx = await wallet.sendTransaction({
      to,
      value
    });
    
    res.json({
      message: 'Successfully sent 0.1 ETH',
      transactionHash: tx.hash,
      from: wallet.address,
      to,
      amount: '0.1 ETH'
    });
    
  } catch (error) {
    console.error('Transaction error:', error);
    res.status(500).json({ error: error as string });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});