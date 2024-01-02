import { Button, Form, Modal } from 'react-bootstrap'

export function CreateRealty({ show, onHide }) {
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
            as="textarea"
            placeholder="Enter text"
            style={{ height: '135px' }}
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
