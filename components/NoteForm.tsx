import { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import { modalContext } from '../context/ModalProvider'
import { noteListContext } from '../context/NoteListProvider'
import { currentDataFinder } from '../helperFunctions/currentDateFinder'
import ColorPicker from './ColorPicker'

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
    width: '774px',
    height: '620px',
    border: 'none',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
}

const NoteForm = ({ type }: FormProps) => {
  const { handleModalOpener, handleUpdateModalOpener } = useContext(modalContext)
  const { updateItem, handleCreateNewNote, handleUpdateNote } = useContext(noteListContext)

  let currentDate = currentDataFinder()

  const [values, setValues] = useState<initialValues>({
    title: '',
    description: '',
    hasStar: false,
    date: currentDate,
    id: Math.floor(Math.random() * 10000),
  })

  const [hasStar] = useState<boolean>()

  const handleForm = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
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
    handleUpdateNote(values)
    handleCreateNewNote()
    handleUpdateModalOpener()
  }

  return (
    <>
      <Modal
        isOpen={true}
        onRequestClose={
          type == 'create' ? handleModalOpener : handleUpdateModalOpener
        }
        style={customStyles}
      >
        <div className=" d-flex row align-items-center justify-content-center m-0 p-3">
          <div className="d-flex justify-content-between mb-5 pt-3">
            <span></span>
            {type == 'create' ? (
              <span>New Note</span>
            ) : (
              <span>Update Note</span>
            )}
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
                defaultValue={type == 'create' ? '' : updateItem && updateItem[0].title}
                onChange={handleForm}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Note Details</Form.Label>
              <Form.Control
                required
                as="textarea"
                name="description"
                rows={3}
                defaultValue={type == 'create' ? '' : updateItem && updateItem[0].description}
                onChange={handleForm}
                style={{ minHeight: '200px' }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Make this note star"
                name="hasStar"
                checked={hasStar}
                onChange={() => {
                  values.hasStar = !hasStar
                }}
              />
            </Form.Group>
            <div className="d-flex justify-content-between py-3">
              <ColorPicker handleForm={handleForm} />
              <Button variant="dark" type="submit" className="px-5">
                {type == 'create' ? <span>Save</span> : <span>Update</span>}
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  )
}

export default NoteForm
