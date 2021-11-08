
import ModalProvider from '../context/ModalProvider'
import NoteListProvider from '../context/NoteListProvider'
import StarListProviderProvider from '../context/StarListProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NoteListProvider>
      <ModalProvider>
        <StarListProviderProvider>
              <Component {...pageProps} />
        </StarListProviderProvider>
      </ModalProvider>
    </NoteListProvider>
  )
}

export default MyApp
