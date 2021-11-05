import ContextProvider from '../context/ContextProvider'
import StarListProviderProvider from '../context/StarListProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <StarListProviderProvider>
        <Component {...pageProps} />
      </StarListProviderProvider>
    </ContextProvider>
  )
}

export default MyApp
