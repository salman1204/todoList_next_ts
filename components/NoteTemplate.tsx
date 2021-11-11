import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { modalContext } from '../context/ModalProvider'
import NoteForm from './NoteForm'
import NoteLists from './NoteLists'
import Sidebar from './Sidebar'

const NoteTemplate = () => {
  const { modal, updateModal } = useContext(modalContext)

  return (
    <Container fluid> 
      <Row>
        <Col xs={1}>
          <Sidebar />
        </Col>
        <Col>
          <Row>
            <NoteLists />
          </Row>
        </Col>
      </Row>
      {modal && <NoteForm type="create"/>}
      {updateModal && <NoteForm type="update"/>}
    </Container>
  )
}

export default NoteTemplate
