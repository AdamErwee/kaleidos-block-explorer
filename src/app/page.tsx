import fetchBlocks from './api';

export default function Page() {
  // const bitcoin = 'bitcoin';
  // const bitcoinCash = 'bitcoin-cash';
  const ethereum = 'ethereum'

   fetchBlocks(ethereum);
  return <h1>Hello, Next.js!</h1>
}

