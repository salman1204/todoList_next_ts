import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

interface initialValues {
  title: string
  description: string
}

const TodoForm = () => {
  const [values, setValues] = useState<initialValues | null>(null)

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
    let a = []
    a = JSON.parse(localStorage.getItem('list')) || []
    a.push(values)
    localStorage.setItem('list', JSON.stringify(a))
  }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={handleForm}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={3}
            onChange={handleForm}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="primary" type="submit">
          Test
        </Button>
      </Form>
    </div>
  )
}

export default TodoForm
