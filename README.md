# Block Explorer App

Block Explorer is a web application built with Next.js, TypeScript, React, and styled-components. It allows users to explore the latest blocks of various cryptocurrencies and view detailed information about individual blocks.

## Features

- **Home Screen (Block Explorer):**
  - Left sidebar with links for Bitcoin, Ethereum, and Bitcoin Cash.
  - Table displaying the latest blocks for the selected cryptocurrency.
  
- **Block Screen:**
  - Detailed information about individual blocks, including hash, confirmations, timestamp, height, miner, number of transactions, difficulty, merkle root, version, etc.
  - Transactions section showing transaction details (hash, from address, to address(s), and amounts) for the selected block.

## Data Source

- Utilizes Blockchair's API for fetching blockchain data.
- Example endpoint for fetching latest blocks: `https://api.blockchair.com/${chain}/blocks?limit=15`.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- `src/`: Contains the source code of the application.
  - `api.ts`: File for API utility functions.
  - `app/`: Contains the main application components.
    - `block-explorer/`: Contains the Home Screen components.
      - `page.tsx`: Main page component for the Block Explorer.
    - `block-screen/`: Contains the Block Screen components.
      - `page.tsx`: Main page component for the Block Screen.
    - `layout.tsx`: Layout component shared across pages.
    - `page.tsx`: Main page component shared across pages.
    - `transactions/`: Contains components for transaction details.
      - `page.tsx`: Main page component for transaction details.
  - `components/`: Contains reusable React components.
  - `styles/`: Contains styled-components styles.

- `lib/`: Contains library files.
- `next-env.d.ts`: TypeScript declaration file for Next.js.
- `package-lock.json`: Lock file for npm dependencies.
- `package.json`: Manages project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration file.

## Development Process

1. Initial setup includes installing necessary dependencies (Next.js, TypeScript, React, styled-components) and setting up project structure.
2. Implementation of components such as Home Screen, Left Sidebar, and LatestBlocksTable.
3. Data fetching from Blockchair's API integrated into the LatestBlocksTable component to populate the table with latest block data.
4. Clicking on a block hash triggers fetching and displaying additional block details in the Block Screen.

## Contributors

- Adam Erwee (https://github.com/AdamErwee)
