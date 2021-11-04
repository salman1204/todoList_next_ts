import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import TodoLists from './TodoLists'

const Template = () => {
  return (
    <>
      <Row>
        <Col xs={1}>
          <Sidebar />
        </Col>
        <Col>
          <Row >
            <TodoLists />
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Template
