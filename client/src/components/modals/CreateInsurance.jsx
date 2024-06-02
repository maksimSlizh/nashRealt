import { useState } from 'react'
import { Image, Button, Form, Modal } from 'react-bootstrap'
import { createInsurance } from "../../http/insuranceApi";
import {getUserIdFromToken} from "../../helpers/index";

export function CreateInsurance({ show, onHide }) {

  const [title, setTitle] = useState('')
  const [titlePl, setTitlePl] = useState('')
  const [text, setText] = useState('')
  const [textPl, setTextPl] = useState('')
  const [description, setDescription] = useState('')
  const [descriptionPl, setDescriptionPl] = useState('')
  const [image, setImage] = useState('')
  const [icon, setIcon] = useState('')


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
    setImage(e.target.value)
  }

  function changeIcon(e) {
    setIcon(e.target.value)
  }

  const submitInsurance = (e) => {
    e.preventDefault()
    const userId = getUserIdFromToken()

    const data = {
      title_ru: title,
      title_pl: titlePl,
      text_ru: text,
      text_pl: textPl,
      description_ru: description,
      description_pl: descriptionPl,
      img: image,
      icon: icon,
      userId: userId
    }


    createInsurance(data).then(data => {
      setTitle('')
      setTitlePl('')
      setText('')
      setTextPl('')
      setDescription('')
      setDescriptionPl('')
      setImage('')
      setIcon('')
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
            value={titlePl}
            className='mb-3'
            as="textarea"
            placeholder="Enter title PL"
            style={{ height: '60px', borderColor: 'red' }}
            onChange={(e) => setTitlePl(e.target.value)}
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
            value={textPl}
            className='mb-3'
            as="textarea"
            placeholder="Enter text PL"
            style={{ height: '135px', borderColor: 'red' }}
            onChange={(e) => setTextPl(e.target.value)}
          />
          <Form.Control
            value={description}
            className='mb-3'
            as="textarea"
            placeholder="Enter description"
            style={{ height: '100px' }}
            onChange={changeDescription}
          />
          <Form.Control
            value={descriptionPl}
            className='mb-3'
            as="textarea"
            placeholder="Enter description PL"
            style={{ height: '100px', borderColor: 'red' }}
            onChange={(e) => setDescriptionPl(e.target.value)}
          />
          <Form.Label>Choose Image:</Form.Label>
          <Form.Control
            value={image}
            as="textarea"
            onChange={changeImage}
          />
          <Form.Label>Choose Icon:</Form.Label>
          <Form.Control
            value={icon}
            as="textarea"
            onChange={changeIcon}
            description="Select an icon for your insurance"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Cancel</Button>
        <Button variant="outline-success" onClick={submitInsurance}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}
