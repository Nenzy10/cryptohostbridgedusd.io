export const LINKS = {
  site: "https://cryptohostbridgedusd.io",
  whitepaper: "https://cryptohostbridgedusd.io/assets/CUSD_Whitepaper.pdf",
  // Hero BUY button default (Optimism GeckoTerminal pool)
  buy: "https://www.geckoterminal.com/optimism/pools/0x2a6c40c82482698b034ff296c1f70d0ba2fb010e",
  logo: "/assets/CUSD.svg",
  twitter: "https://twitter.com/NenzyBrown",
  telegram: "https://t.me/NenzyBrown",
  github: "https://github.com/Nenzy10/cryptohostbridgedusd.io",
};
export const PRICE_FEED_URL = "/price-feed.json"; // << same-origin, no CORS needed

export const CHAINS = {
  ethereum: { chainId: "0x1", chainName: "Ethereum Mainnet", nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: ["https://rpc.ankr.com/eth"], blockExplorerUrls: ["https://etherscan.io"] },
  bsc: { chainId: "0x38", chainName: "Binance Smart Chain", nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 }, rpcUrls: ["https://bsc-dataseed.binance.org"], blockExplorerUrls: ["https://bscscan.com"] },
  arbitrum: { chainId: "0xa4b1", chainName: "Arbitrum One", nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: ["https://arb1.arbitrum.io/rpc"], blockExplorerUrls: ["https://arbiscan.io"] },
  optimism: { chainId: "0xa", chainName: "OP Mainnet", nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 }, rpcUrls: ["https://mainnet.optimism.io"], blockExplorerUrls: ["https://optimistic.etherscan.io"] },
} as const;

export type ContractInfo = {
  chain: string;
  status: string;
  address: string;
  explorer: string;
  chainKey: keyof typeof CHAINS;
  tradeUrl?: string;
};

export const CONTRACTS: ContractInfo[] = [
  {
    chain: "Binance Smart Chain (Current)",
    status: "Current - 2025",
    address: "0x7f32650c35Cf5a90447B922932b09262626a1346",
    explorer: "https://bscscan.com/address/0x7f32650c35Cf5a90447B922932b09262626a1346",
    chainKey: "bsc",
    tradeUrl: "https://coinbrain.com/coins/bnb-0x7f32650c35cf5a90447b922932b09262626a1346",
  },
  {
    chain: "Binance Smart Chain (V1)",
    status: "V1 - 2024",
    address: "0x6665B556A5e46A314d45334368fD56A65A5979FA",
    explorer: "https://bscscan.com/address/0x6665B556A5e46A314d45334368fD56A65A5979FA",
    chainKey: "bsc",
    tradeUrl: "https://coinbrain.com/coins/bnb-0x6665b556a5e46a314d45334368fd56a65a5979fa",
  },
  {
    chain: "Ethereum",
    status: "Active - 2025",
    address: "0x54fdc17E702DC85E33C5aeCFaE57c76cECf23C4c",
    explorer: "https://etherscan.io/address/0x54fdc17E702DC85E33C5aeCFaE57c76cECf23C4c",
    chainKey: "ethereum",
    // add tradeUrl when you have an ETH pool
  },
  {
    chain: "Arbitrum",
    status: "Active - 2025",
    address: "0x82656b01211ed760f3ca7f597b05928cd72c1971",
    explorer: "https://arbiscan.io/address/0x82656b01211ed760f3ca7f597b05928cd72c1971",
    chainKey: "arbitrum",
    // add tradeUrl when you have an ARB pool
  },
  {
    chain: "Optimism",
    status: "Active - 2025",
    address: "0x82656b01211ed760f3ca7f597b05928cd72c1971",
    explorer: "https://optimistic.etherscan.io/address/0x82656b01211ed760f3ca7f597b05928cd72c1971",
    chainKey: "optimism",
    tradeUrl: "https://www.geckoterminal.com/optimism/pools/0x2a6c40c82482698b034ff296c1f70d0ba2fb010e",
  },
];
