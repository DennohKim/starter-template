"use client"

import "@rainbow-me/rainbowkit/styles.css"
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit"
import { WagmiConfig, configureChains, createClient } from "wagmi"
import { arbitrum, mainnet, polygon, polygonMumbai } from "wagmi/chains"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

const alchemyApiKey: string =
  process.env.NEXT_PUBLIC_ALCHEMY_ID ?? "defaultApiKey"

const { chains, provider } = configureChains(
  [mainnet, polygonMumbai, polygon, arbitrum],
  [
    alchemyProvider({
      apiKey: alchemyApiKey,
      priority: 0,
    }),
    publicProvider({ priority: 1 }),
  ]
)

const { connectors } = getDefaultWallets({
  appName: "Loibon",
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

interface WalletProviderProps {
  children: React.ReactNode
}

export default function WalletProvider({ children }: WalletProviderProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        theme={darkTheme({
          accentColor: "#F6AA1C",
          accentColorForeground: "white",
          borderRadius: "medium",
          fontStack: "system",
          overlayBlur: "small",
        })}
        chains={chains}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
