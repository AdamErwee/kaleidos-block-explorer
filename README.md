# Block Explorer App

My Block Explorer is a web application built with Next.js, TypeScript, React, and styled-components. It allows users to explore the latest blocks of various cryptocurrencies and view detailed information and transactions about individual blocks.

## Features

### Home Screen (Block Explorer):

- Left sidebar with links for Bitcoin, Ethereum, and Bitcoin Cash.
- Table displaying the latest blocks for the selected cryptocurrency. Has functionality to click on a hash in the table, navigating to the Block Screen.
- Search with functionality to search and fetch a block by hash. 

### Block Screen:

- Detailed information about individual blocks, including hash, confirmations, timestamp, height, miner, number of transactions, difficulty, merkle root, version, etc.
- Transactions section showing transaction details (hash, from address, to address(s), and amounts) for the selected block.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

- **src/**: Contains the source code of the application.
  - **actions/**: File for action functions used throughout application.
  - **api/**: Folder for API utility functions.
  - **app/**: Contains the main application layout & page structure.
    - **block-explorer/**: Contains the Home Screen page.
    - **block/**: Contains the Block Screen page.
  - **components/**: Contains reusable React components.
  - **constants/**: Contains constants (e.g. chains).
  - **lib/**: Contains library files (e.g. style registry).
  - **styles/**: Contains styled-components styles.
  - **types.d.ts**: Contains global types.
- **CREDITS.md**: Contains noteworthy credits.
- **next-env.d.ts**: TypeScript declaration file for Next.js (part of next.js install).
- **package-lock.json**: Lock file for npm dependencies.
- **package.json**: Manages project dependencies and scripts.
- **tsconfig.json**: TypeScript configuration file.

## API Usage

```Blockchair API```

- Used to fetch latest blocks. Provides endpoints for BTC, ETH and BCH and is relatively fast.
- Can replace Blockchain.com API for faster calls and less response data manipulation.

Example endpoint for fetching latest blocks: `https://api.blockchair.com/${chain}/blocks?limit=15`.

```Blockchain.com API```

- Used to fetch single latest block, single block and transactions information. Only available on BTC blocks/transactions and relatively slow. Requires extensive response data manipulation, but used to showcase skills determining certain block information (e.g. difficulty, transaction volume, miner etc.)


## Contributors

- Adam Erwee ([GitHub](https://github.com/AdamErwee))
