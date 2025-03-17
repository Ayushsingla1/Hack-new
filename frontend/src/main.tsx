import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Web3Provider } from './utils/WalletConfig.tsx'

createRoot(document.getElementById('root')!).render(
        <Web3Provider>
                <BrowserRouter>
                        <App />
                </BrowserRouter>
        </Web3Provider>
)
