import { useSelector } from 'react-redux'
import { Button, Modal, Form, Dropdown } from 'react-bootstrap'

export function CreateNews({show, onHide}) {
  const { news } = useSelector(state => state.news)
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create News
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            className='mb-3'
            as="textarea"
            placeholder="Enter title"
            style={{ height: '60px' }}
          />
          <Form.Control
            className='mb-3'
            as="textarea"
            placeholder="Enter text"
            style={{ height: '135px' }}
           />
           <Form.Control
            className='mb-3'
            as="textarea"
            placeholder="Enter description"
            style={{ height: '100px' }}
          />
          <Form.Control
            type='file'
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Cancel</Button>
        <Button variant="outline-success" onClick={onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}
