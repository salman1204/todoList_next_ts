import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import TodoItem from './TodoItem'
import { Form, FormControl } from 'react-bootstrap'

type data = {
  title: string
}

const TodoLists = () => {
  const [searchText, setSearchText] = useState<string>('')

  let todoList: [] =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('list'))
      : null

  let filterList = []
  todoList != null &&
    (filterList = todoList.filter((data: data) =>
      data.title.toLowerCase().includes(searchText.toLowerCase())
    ))

  return (
    <div className="p-5">
      <Row>
        <Form className="w-75">
          <FormControl
            placeholder="Search with title"
            type="text"
            onChange={e => setSearchText(e.target.value)}
          />
        </Form>
      </Row>
      <Row>
        <h1>Notes</h1>
      </Row>
      <Row>
        <Col>
          <div className="d-flex flex-wrap justify-content-start">
            {filterList != null &&
              filterList.map((item) => (
                <TodoItem key={Math.floor(Math.random() * 1000)} item={item} />
              ))}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TodoLists
