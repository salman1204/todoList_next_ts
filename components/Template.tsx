import { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { modalContext } from '../context/ContextProvider'
import Sidebar from './Sidebar'
import TodoForm from './TodoForm'
import TodoLists from './TodoLists'


const Template = () => {
  const {modal} = useContext(modalContext)

  return (
    <>
      {modal ? (
        <Row>
        <TodoForm />
        <Row>
          <Col xs={1}>
            <Sidebar />
          </Col>
          <Col >
            <Row >
              <TodoLists />
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
              <TodoLists />
            </Row>
          </Col>
        </Row>
      )}
    </>
  )
}

export default Template
