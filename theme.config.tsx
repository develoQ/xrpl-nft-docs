import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s - XRPL NFTドキュメント',
    }
  },
  logo: <span>XRPL NFTドキュメント</span>,
  project: {
    link: "https://github.com/develoQ/xrpl-nft-docs",
  },
  chat: {
    link: "https://discord.gg/7Q3MUuTRer",
  },
  docsRepositoryBase: "https://github.com/develoQ/xrpl-nft-docs",
  footer: {
    text: "Provided by XRPL NFT Japan Community",
  },
};

export default config
