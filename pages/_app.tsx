
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
            <UpdateUuidProvider>
              <Component {...pageProps} />
            </UpdateUuidProvider>  
        </StarListProviderProvider>
      </ModalProvider>
    </NoteListProvider>
  )
}

export default MyApp
