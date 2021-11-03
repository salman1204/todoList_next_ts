import { Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
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
          <Row>
            <Header />
          </Row>
          <Row>
            <TodoLists />
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Template
