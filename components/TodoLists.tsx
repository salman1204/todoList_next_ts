import { useContext, useState } from 'react'
import { Col, Form, FormControl, Row } from 'react-bootstrap'
import { starContext } from '../context/StarListProvider'
import TodoItem from './TodoItem'

type data = {
  title: string
  hasStar: boolean
}

const TodoLists = () => {
  const { star } = useContext(starContext)

  const [searchText, setSearchText] = useState<string>('')

  let todoList: [] =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('list'))
      : null

  let filterList = []

  {
    star
      ? todoList != null &&
        (filterList = todoList.filter((data: data) => data.hasStar == true))
      : todoList != null &&
        (filterList = todoList.filter((data: data) =>
          data.title.toLowerCase().includes(searchText.toLowerCase())
        ))
  }
  var todoLists = filterList.reverse()
  return (
    <div className="p-5 border-start min-vh-100">
      <Row className="d-flex justify-content-center mb-4">
        <Form className="w-75">
          <FormControl
            placeholder="Search with title"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Form>
      </Row>
      <Row>{star ? <h1 style={{color:"#FECD03"}}>Star Notes</h1> : <h1>All Notes</h1>}</Row>
      <Row>
        <Col>
          <div className="d-flex flex-wrap justify-content-start">
            {todoLists != null &&
              todoLists.map((item) => (
                <TodoItem key={Math.floor(Math.random() * 1000)} item={item} />
              ))}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default TodoLists
