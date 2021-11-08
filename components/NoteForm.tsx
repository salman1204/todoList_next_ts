import { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import ClipLoader from "react-spinners/ClipLoader"
import { modalContext } from '../context/ModalProvider'
import { noteListContext } from '../context/NoteListProvider'
import { currentDataFinder } from '../helperFunctions/currentDateFinder'
import Loader from "react-loader-spinner";
import ColorPicker from './ColorPicker'
import { getListFromLocal } from '../helperFunctions/getListFromLocal'
interface initialValues {
  title: string
  description: string
  hasStar: boolean
  date: string
  id: number
  color?: string
}

type FormProps = {
  type: string
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5%',
  },
}

const NoteForm = ({ type }: FormProps) => {
  const { handleModalOpener, handleUpdateModalOpener } =useContext(modalContext)
  const { updateId, handleCreateNewNote, handleUpdateNote } = useContext(noteListContext)

  let currentDate = currentDataFinder()

  const [test,setTest] = useState(false)
  let list = getListFromLocal();

  let updatedItem = list.filter((list) => list.id == updateId)

  const [values, setValues] = useState<initialValues>({
    title: '',
    description: '',
    hasStar: false,
    date: currentDate,
    id: Math.floor(Math.random() * 10000),
  })

  const [updateValues, setUpdateValues] = useState<initialValues>({
    title: updatedItem[0].title,
    description: updatedItem[0].description,
    hasStar: updatedItem[0].hasStar,
    date: currentDate,
    id: 1,
  })

  const [hasStar] = useState<boolean>()

  useEffect(() => {
    !localStorage.getItem('list') &&
      localStorage.setItem('list', JSON.stringify([]))
  }, [])

  const handleForm = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleUpdateForm = (e) => {
    const { name, value } = e.target
    setUpdateValues({
      ...updateValues,
      [name]: value,
    })
  }

  const handleCreateNote = (e) => {
    e.preventDefault()
    let formData = []
    formData = JSON.parse(localStorage.getItem('list')) || []
    formData.push(values)
    localStorage.setItem('list', JSON.stringify(formData))
    handleCreateNewNote()
    handleModalOpener()
  }

  const handleaUpdateNote = (e) => {
    e.preventDefault()
    handleUpdateNote(updateValues)
    handleCreateNewNote()
    handleUpdateModalOpener()
  }

  return (
    <>
    {
      (updatedItem[0] == undefined) ? <Loader type="Puff" /> : <Modal
      isOpen={true}
      onRequestClose={
        type == 'create' ? handleModalOpener : handleUpdateModalOpener
      }
      style={customStyles}
    >
      <div className=" d-flex row align-items-center justify-content-center m-0">
        <div className="d-flex justify-content-between mb-5 pt-3">
          <span></span>
          {type == 'create' ? <span>New Note</span> : <span>Update Note</span>}
          <AiOutlineClose
            onClick={
              type == 'create' ? handleModalOpener : handleUpdateModalOpener
            }
            style={{ cursor: 'pointer' }}
          />
        </div>

        <Form
          onSubmit={type == 'create' ? handleCreateNote : handleaUpdateNote}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Note Title</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              defaultValue={type == 'create' ? '' : updatedItem[0].title}
              onChange={type == 'create' ? handleForm : handleUpdateForm}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Note Details</Form.Label>
            <Form.Control
              required
              as="textarea"
              name="description"
              rows={3}
              defaultValue={type == 'create' ? '' : updatedItem[0].description}
              onChange={type == 'create' ? handleForm : handleUpdateForm}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Make this note star"
              name="hasStar"
              checked={type == "create" ? hasStar : updateValues.hasStar}
              onChange={() => {
                values.hasStar = !hasStar
                updateValues.hasStar = !updateValues.hasStar
              }}
            />
          </Form.Group>
          <div className="d-flex justify-content-between py-3">
            <ColorPicker handleForm={handleForm} />
            <Button variant="dark" type="submit">
              {type == 'create' ? <span>Save</span> : <span>Update</span>}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
    }
    
  </>
  )}

export default NoteForm
