import { useEffect } from 'react'
import { IconContext } from 'react-icons'
import { AiFillStar, AiOutlineDelete } from 'react-icons/ai'
import { VscEdit } from 'react-icons/vsc'

type TodoItems = {
  item: {
    title: string,
    description: string,
  }
}

const TodoItem = ({item} : TodoItems) => {
  return (
    <div className="todo__card__main  mt-3 p-3 me-2 position-relative ">
      <div className="d-flex justify-content-between mb-2">
        <h5>
          <b>{item.title}</b>
        </h5>
        <IconContext.Provider value={{ color: '#FECD03', size: '25px' }}>
          <div className="p-2 d-inline-block rounded-circle icon__background">
            <AiFillStar />
          </div>
        </IconContext.Provider>
      </div>
      <div>{item.description}</div>
      <div className="position-absolute display-inline-flex bottom-0 mb-2 w-100">
        <div className="d-flex justify-content-between">
          <div>
            <p>{item.title}</p>
          </div>
          <div className="pe-4">
            <IconContext.Provider value={{ size: '25px' }}>
              <div className="d-inline-block pe-2">
                <AiOutlineDelete />
              </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: '#fff', size: '23px' }}>
              <div className="p-2 d-inline-block rounded-circle icon__background">
                <VscEdit />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
