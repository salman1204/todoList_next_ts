import { useContext, useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { RiSearchLine } from 'react-icons/ri'
import { noteListContext } from '../context/NoteListProvider'
import { starContext } from '../context/StarListProvider'
import NoteItem from './NoteItem'
type data = {
  title: string
  hasStar: boolean
}

const NoteLists = () => {
  const { star } = useContext(starContext)
  const [searchText, setSearchText] = useState<string>('')
  const { noteLists } = useContext(noteListContext)

  useEffect(() => {
    !localStorage.getItem('list') &&
      localStorage.setItem('list', JSON.stringify([]))
  }, [])

  let todoList = noteLists

  let filterList = []

  {
    star &&
      todoList != null &&
      (todoList = todoList.filter((data: data) => data.hasStar == true))
  }

  todoList != null &&
    (filterList = todoList.filter((data: data) =>
      data.title.toLowerCase().includes(searchText.toLowerCase())
    ))

  let NoteLists = filterList.reverse()

  return (
    <div className="p-5 border-start min-vh-100">
      <Row>
        <div
          className="d-flex justify-content-center search__bar__div"
        >
          <input
            className="search__bar w-100 d-inline-block ps-5 pb-3"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search"
          />
          <i className="ms-3">
            <RiSearchLine size={20} color={"#9E9E9E"}/>
          </i>
        </div>
      </Row>
      <Row className="mt-5 ms-3">
        {star ? (
          <h1 style={{ color: '#FECD03' }}>Star Notes</h1>
        ) : (
          <h1>All Notes</h1>
        )}
      </Row>
      <Row>
        <div className="d-flex flex-wrap justify-content-start">
          {NoteLists != null &&
            NoteLists.map((item) => (
              <NoteItem key={Math.floor(Math.random() * 1000)} item={item} />
            ))}
        </div>
      </Row>
    </div>
  )
}

export default NoteLists
