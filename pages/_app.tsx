import ModalProvider from '../context/ModalProvider'
import StarListProviderProvider from '../context/StarListProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <StarListProviderProvider>
        <Component {...pageProps} />
      </StarListProviderProvider>
    </ModalProvider>
  )
}

export default MyApp
