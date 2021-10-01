import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Parent from './containers/parent'
import Child from './containers/child'

function MyApp({ pageProps }: AppProps) {
  return <Parent {...pageProps} />
}
export default MyApp
