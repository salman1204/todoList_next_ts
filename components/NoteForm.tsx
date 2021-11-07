import { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import Modal from 'react-modal'
import { modalContext } from '../context/ModalProvider'
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

const NoteForm = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const dateObj = new Date()
  const month = monthNames[dateObj.getMonth()]
  const day = String(dateObj.getDate()).padStart(2, '0')
  const year = dateObj.getFullYear()
  const currentDate = day + ' ' + month + ', ' + year

  const [values, setValues] = useState<initialValues>({
    title: '',
    description: '',
    hasStar: false,
    date: currentDate,
    id: Math.floor(Math.random() * 10000),
  })
  const [hasStar] = useState<boolean>()

  const { handleModal } = useContext(modalContext)

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

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = []
    formData = JSON.parse(localStorage.getItem('list')) || []
    formData.push(values)
    localStorage.setItem('list', JSON.stringify(formData))
    handleModal()
  }

  return (
    <Modal isOpen={true} onRequestClose={handleModal} style={customStyles}>
      <div className=" d-flex row align-items-center justify-content-center m-0">
        <div className="d-flex justify-content-between mb-5 pt-3">
          <span></span>
          <span>New Note</span>
          <AiOutlineClose onClick={handleModal} style={{ cursor: 'pointer' }} />
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Note Title</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              onChange={handleForm}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Note Details</Form.Label>
            <Form.Control
              required
              as="textarea"
              name="description"
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
              onChange={() => {
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

export default NoteForm
