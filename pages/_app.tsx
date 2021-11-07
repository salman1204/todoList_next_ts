import DeleteUuidProvider from '../context/DeleteUuidProvider'
import ModalProvider from '../context/ModalProvider'
import StarListProviderProvider from '../context/StarListProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <StarListProviderProvider>
        <DeleteUuidProvider>
          <Component {...pageProps} />
        </DeleteUuidProvider>
      </StarListProviderProvider>
    </ModalProvider>
  )
}

export default MyApp
