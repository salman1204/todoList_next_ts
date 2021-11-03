import { Col, Row } from 'react-bootstrap'
import todoList from './../data.json'
import TodoItem from './TodoItem'

export interface Props {
  item: object
}

const TodoLists = () => {
  return (
    <div className="p-5">
      <Row>
        <h1>Notes</h1>
      </Row>
      <Row>
        <Col>
          <div className="d-flex flex-wrap justify-content-start">
            {todoList.map((item) => (
              <TodoItem key={item.id} item={item} />
            ))}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TodoLists
