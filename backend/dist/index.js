"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ethers_1 = require("ethers");
require("dotenv");
require("dotenv").config();
// Create Express app
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Environment variables
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = "https://rpc.open-campus-codex.gelato.digital";
const PORT = 3001;
// Initialize provider and wallet with ethers v6
const provider = new ethers_1.ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers_1.ethers.Wallet(PRIVATE_KEY || "", provider);
// Single route for transferring exactly 0.1 ETH
//@ts-ignore
app.post('/api/transfer', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { to } = req.body;
        if (!to || !ethers_1.ethers.isAddress(to)) {
            return res.status(400).json({ error: 'Invalid recipient address' });
        }
        const value = ethers_1.ethers.parseEther('0.1');
        const tx = yield wallet.sendTransaction({
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
    }
    catch (error) {
        console.error('Transaction error:', error);
        res.status(500).json({ error: error });
    }
}));
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
