import Link from 'next/link'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { AiFillStar, AiOutlinePlus } from 'react-icons/ai'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Sidebar = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="flex-column border-end min-vh-100 p-0 m-0">
      <div className="d-flex justify-content-center pt-4">
        <h6>
          {' '}
          <b>NOTEBOOK</b>{' '}
        </h6>
      </div>
      <div className="d-flex justify-content-center">
        <IconContext.Provider value={{ color: '#FECD03', size: '25px' }}>
          <div className="mt-4 p-2 d-inline-block rounded-circle icon__background">
            <AiFillStar />
          </div>
        </IconContext.Provider>
      </div>
      <div className="d-flex justify-content-center">
        <IconContext.Provider value={{ color: '#FFF', size: '25px' }}>
            <div
              className="mt-3 p-2 d-inline-block rounded-circle icon__background"
              onClick={() => {
                setModalOpen(true)
              }}
            >
              <AiOutlinePlus />
            </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Sidebar
