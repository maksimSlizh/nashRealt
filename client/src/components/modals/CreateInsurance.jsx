import { useState } from 'react'
import { Image, Button, Form, Modal } from 'react-bootstrap'
import { createInsurance } from "../../http/insuranceApi";
import {getUserIdFromToken} from "../../helpers/index";

export function CreateInsurance({ show, onHide }) {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [imagePreviewUrl, setImagePreviewUrl] = useState('')
  const [icon, setIcon] = useState('')
  const [iconPreviewUrl, setIconPreviewUrl] = useState('')


  function changeTitle(e) {
    setTitle(e.target.value)
  }
  function changeText(e) {
    setText(e.target.value)
  }
  function changeDescription(e) {
    setDescription(e.target.value)
  }
  function changeImage(e) {
    const file = e.target.files[0]
    setImagePreviewUrl(URL.createObjectURL(file))
    setImage(file)
  }

  function changeIcon(e) {
    const file = e.target.files[0]
    setIconPreviewUrl(URL.createObjectURL(file))
    setIcon(file)
  }

  const submitInsurance = (e) => {
    e.preventDefault()
    const userId = getUserIdFromToken()

    const formData = new FormData()
    formData.append('title', title)
    formData.append('text', text)
    formData.append('description', description)
    formData.append('img', image)
    formData.append('icon', icon)
    formData.append('userId', userId)


    createInsurance(formData).then(data => {
      setTitle('')
      setText('')
      setDescription('')
      setImage('')
      setImagePreviewUrl('')
      setIcon('')
      setIconPreviewUrl('')
      onHide()
    })
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Insurance
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={title}
            className='mb-3'
            as="textarea"
            placeholder="Enter title"
            style={{ height: '60px' }}
            onChange={changeTitle}
          />
          <Form.Control
            value={text}
            className='mb-3'
            as="textarea"
            placeholder="Enter text"
            style={{ height: '135px' }}
            onChange={changeText}
          />
          <Form.Control
            value={description}
            className='mb-3'
            as="textarea"
            placeholder="Enter description"
            style={{ height: '100px' }}
            onChange={changeDescription}
          />
          <Form.Label>Choose Image:</Form.Label>
          <Form.Control
            type='file'
            onChange={changeImage}
          />
          <Form.Label>Choose Icon:</Form.Label>
          <Form.Control
            type='file'
            onChange={changeIcon}
            description="Select an icon for your insurance"
          />
          {imagePreviewUrl && (
            <Image
              src={imagePreviewUrl}
              width={300}
              height={200} />
          )}
          {iconPreviewUrl && (
            <Image
              src={iconPreviewUrl}
              width={100}
              height={100}
            />
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Cancel</Button>
        <Button variant="outline-success" onClick={submitInsurance}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}
