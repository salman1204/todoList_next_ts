import DeleteUuidProvider from '../context/DeleteUuidProvider'
import ModalProvider from '../context/ModalProvider'
import StarListProviderProvider from '../context/StarListProvider'
import UpdateUuidProvider from '../context/UpdateUuidProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <StarListProviderProvider>
        <DeleteUuidProvider>
          <UpdateUuidProvider>
            <Component {...pageProps} />
          </UpdateUuidProvider>
        </DeleteUuidProvider>
      </StarListProviderProvider>
    </ModalProvider>
  )
}

export default MyApp
