import Router from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-modal'
import { modalContext } from '../context/ContextProvider'

interface initialValues {
  title: string
  description: string
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '70%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const TodoForm = () => {
  const [values, setValues] = useState<initialValues | null>(null)
  const { modal, handleModal } = useContext(modalContext)

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
    Router.push('/')
  }

  return (
    <Modal isOpen={true} onRequestClose={handleModal} style={customStyles}>
      <div className=" d-flex row align-items-center justify-content-center m-0 p-0">
        <div onClick={handleModal}>close</div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Title</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              placeholder="Enter Title"
              onChange={handleForm}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              name="description"
              rows={3}
              placeholder="Write Description"
              onChange={handleForm}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Make this note star" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Modal>
  )
}

export default TodoForm
