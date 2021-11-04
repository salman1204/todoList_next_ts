import { Col, Row } from 'react-bootstrap'
import TodoItem from './TodoItem'

const TodoLists = () => {
  let todoList:[] = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('list')) : null
  
  return (
    <div className="p-5">
      <Row>
        <h1>Notes</h1>
      </Row>
      <Row>
        <Col>
          <div className="d-flex flex-wrap justify-content-start">
            {todoList != null && todoList.map((item) => (
              <TodoItem key={Math.floor(Math.random() * 1000)} item={item} />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TodoLists
