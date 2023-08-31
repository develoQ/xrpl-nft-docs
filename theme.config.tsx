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
  head: <>
    <title>XRPL NFTドキュメント</title>
    <meta name="description" content="コミュニティによるXRPL NFTの日本語ドキュメントです！" />
    <meta property="og:title" content="XRPL NFTドキュメント" />
    <meta property="og:description" content="コミュニティによるXRPL NFTの日本語ドキュメントです！" />
    <meta property="og:url" content="https://xrpl-nft-docs-jp.vercel.app" />
    <meta property="og:image" content="https://xrpl-nft-docs-jp.vercel.app/ogp.png" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="XRPL NFTドキュメント" />
    <meta name="twitter:description" content="コミュニティによるXRPL NFTの日本語ドキュメントです！" />
    <link rel="icon" href="/favicon.ico" type="image/png" sizes="256x256"/>
  </>,
  footer: {
    text: "Provided by XRPL NFT Japan Community",
  },
};

export default config
