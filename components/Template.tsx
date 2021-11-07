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
      {modal ? (
        <Row>
          <NoteForm />
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
        </Row>
      ) : (
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
      )}
    </>
  )
}

export default Template
