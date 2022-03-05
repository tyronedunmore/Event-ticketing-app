import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import { NETWORKS } from '@web3-ui/core';
import { Provider } from 'wagmi'


function MyApp({ Component, pageProps }) {
  return (
    <Provider network={NETWORKS.rinkeby}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
