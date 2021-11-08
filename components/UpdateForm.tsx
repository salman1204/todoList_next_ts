import { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import { deleteContext } from '../context/DeleteUuidProvider'
import { modalContext } from '../context/ModalProvider'
import { updateContext } from '../context/UpdateUuidProvider'
import { currentDataFinder } from '../helperFunctions/currentDateFinder'
import { getListFromLocal } from '../helperFunctions/getListFromLocal'
import ColorPicker from './ColorPicker'

interface initialValues {
  title: string
  description: string
  hasStar: boolean
  date: string
  id: number
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

const UpdateForm = () => {
  const { updateUuid, handleUpdateUuid } = useContext(updateContext)
  const { handleUpdateModalOpener } = useContext(modalContext)
  const { handleDeleteUuid } = useContext(deleteContext)

  let currentDate = currentDataFinder()
 
  let notes = getListFromLocal()
  let updateItem = notes.filter((note) => note.id == updateUuid)

  const [values, setValues] = useState<initialValues>({
    title: updateItem[0].title,
    description: updateItem[0].description,
    hasStar: updateItem[0].hasStar,
    date: currentDate,
    id: Math.floor(Math.random() * 10000),
  })

  const [hasStar, setHasStar] = useState<boolean>(updateItem[0].hasStar)

  const handleForm = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = []
    formData = JSON.parse(localStorage.getItem('list')) || []
    formData.push(values)
    localStorage.setItem('list', JSON.stringify(formData))
    handleDeleteUuid(updateUuid)
    handleUpdateModalOpener()
  }

  return (
    <Modal
      isOpen={true}
      onRequestClose={handleUpdateModalOpener}
      style={customStyles}
    >
      <div className=" d-flex row align-items-center justify-content-center m-0">
        <div className="d-flex justify-content-between mb-5 pt-3">
          <span></span>
          <span>New Note</span>
          <AiOutlineClose
            onClick={handleUpdateModalOpener}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Note Title</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              defaultValue={updateItem[0].title}
              onChange={handleForm}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Note Details</Form.Label>
            <Form.Control
              required
              as="textarea"
              name="description"
              defaultValue={updateItem[0].description}
              rows={3}
              onChange={handleForm}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Make this note star"
              name="hasStar"
              checked={hasStar}
              onChange={() =>{
                setHasStar(hasStar);
                values.hasStar = !hasStar
              }}
            />
          </Form.Group>
          <div className="d-flex justify-content-between py-3">
            <ColorPicker handleForm={handleForm} />
            <Button variant="dark" type="submit">
              save
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}

export default UpdateForm
