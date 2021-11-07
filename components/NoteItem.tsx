import { IconContext } from 'react-icons'
import { AiFillStar, AiOutlineDelete } from 'react-icons/ai'
import { VscEdit } from 'react-icons/vsc'

type NoteItems = {
  item: {
    title: string
    description: string
    color: string
    hasStar: boolean
    date: string
    id: number
  }
}

const NoteItem = ({ item }: NoteItems) => {
  return (
    <div
      className="todo__card__main  mt-3 p-3 me-2 position-relative "
      style={{ backgroundColor: `${item.color}` }}
    >
      <div className="d-flex justify-content-between mb-2">
        <h5>
          <b>{item.title}</b>
        </h5>
        {item.hasStar && (
            <div className="p-2 d-inline-block rounded-circle icon__background">
              <AiFillStar color = {`#FECD03`}  size= {25} />
            </div> 
        )}
      </div>
      <div>{item.description}</div>
      <div className="position-absolute display-inline-flex bottom-0 mb-2 w-100">
        <div className="d-flex justify-content-between">
          <div>{item.date}</div>
          <div className="pe-4">
              <div className="d-inline-block pe-2">
                <AiOutlineDelete size={25} onClick={()=> console.log(item.id)}/>
              </div>
              <div className="p-2 d-inline-block rounded-circle icon__background">
                <VscEdit color = {`#FFFFFF`}  size= {23} />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteItem