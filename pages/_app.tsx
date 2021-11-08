import DeleteUuidProvider from '../context/DeleteUuidProvider'
import ModalProvider from '../context/ModalProvider'
import NoteListProvider from '../context/NoteListProvider'
import StarListProviderProvider from '../context/StarListProvider'
import UpdateUuidProvider from '../context/UpdateUuidProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NoteListProvider>
      <ModalProvider>
        <StarListProviderProvider>
          <DeleteUuidProvider>
            <UpdateUuidProvider>
              <Component {...pageProps} />
            </UpdateUuidProvider>
          </DeleteUuidProvider>
        </StarListProviderProvider>
      </ModalProvider>
    </NoteListProvider>
  )
}

export default MyApp
