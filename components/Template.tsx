import { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { modalContext } from '../context/ModalProvider'
import NoteForm from './NoteForm'
import NoteLists from './NoteLists'
import Sidebar from './Sidebar'

const Template = () => {
  const { modal } = useContext(modalContext)

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
    </>
  )
}

export default Template
