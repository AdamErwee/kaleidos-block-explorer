import fetchLatestBlocks from './api'

export default function Page() {
  fetchLatestBlocks(10)
  return <h1>Hello, Next.js!</h1>
}