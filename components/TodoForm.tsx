import { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
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
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5%',
  },
}

const TodoForm = () => {
  const [values, setValues] = useState<initialValues | null>(null)
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

    console.log(values)
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
            <Form.Check type="checkbox" label="Make this note star" />
          </Form.Group>
          <div className="d-flex justify-content-between py-3">
            <div>
            <div className="color border" style={{ backgroundColor: '#FFFFFF'}}>
                <input
                  type="radio"
                  name="color"
                  value="#FFFFFF"
                  onChange={handleForm}
                />
                <i className="checkbox-icon"></i>
              </div>
              <div className="color" style={{ backgroundColor: '#01D4FF' }}>
                <input
                  type="radio"
                  name="color"
                  value="#01D4FF"
                  onChange={handleForm}
                />
                <i className="checkbox-icon"></i>
              </div>

              <div className="color" style={{ backgroundColor: '#FF9B73' }}>
                <input
                  type="radio"
                  name="color"
                  value="#FF9B73"
                  onChange={handleForm}
                />
                <i className="checkbox-icon"></i>
              </div>

              <div className="color" style={{ backgroundColor: '#B692FE' }}>
                <input
                  type="radio"
                  name="color"
                  value="#B692FE"
                  onChange={handleForm}
                />
                <i className="checkbox-icon"></i>
              </div>

              <div className="color" style={{ backgroundColor: '#E4EE90' }}>
                <input
                  type="radio"
                  name="color"
                  value="#E4EE90"
                  onChange={handleForm}
                />
                <i className="checkbox-icon"></i>
              </div>

              <div className="color" style={{ backgroundColor: '#FFC971' }}>
                <input
                  type="radio"
                  name="color"
                  value="#FFC971"
                  onChange={handleForm}
                />
                <i className="checkbox-icon"></i>
              </div>
            </div>

            <Button variant="dark" type="submit">
              save
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}

export default TodoForm
