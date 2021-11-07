import { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { modalContext } from '../context/ModalProvider'
import NoteForm from './NoteForm'
import NoteLists from './NoteLists'
import Sidebar from './Sidebar'
import UpdateForm from './UpdateForm'

const NoteTemplate = () => {
  const { modal, updateModal } = useContext(modalContext)

  return (
    <>
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
      {modal && <NoteForm />}
      {updateModal && <UpdateForm/>}
    </>
  )
}

export default NoteTemplate
