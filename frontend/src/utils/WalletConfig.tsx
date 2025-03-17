import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { eduChainTestnet } from "wagmi/chains";
import React from "react";

const config = createConfig(
  getDefaultConfig({
    chains: [eduChainTestnet],
    transports: {
      [eduChainTestnet.id]: http(),
    },

    walletConnectProjectId: '2',

    appName: "Edu-Hacks",
    appDescription: "Your App Description",
    appUrl: "https://family.co", 
    appIcon: "https://family.co/logo.png",
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children } : {children : React.ReactNode}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider customTheme={{
            "--ck-connectbutton-background" : "rgba(101,73,251,100)",
            "--ck-connectbutton-hover-background" : "rgba(115,65,250,100)",
            "--ck-connectbutton-active-color" : "rgba(104,72,251,100)",
            "--ck-connectbutton-border-radius" : "8px",
            "--ck-modal-box-shadow" : "rgba(104,72,251,100)"
        }} options={{
            disclaimer: (
              <>
                By connecting your wallet you agree to the{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://en.wikipedia.org/wiki/Terms_of_service"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://en.wikipedia.org/wiki/Privacy_policy"
                >
                  Privacy Policy
                </a>
              </>
            ),
          }}>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};