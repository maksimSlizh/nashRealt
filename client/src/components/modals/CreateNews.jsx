import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Modal, Form, Image } from 'react-bootstrap'
import { createNews } from '../../http/newsApi'

export function CreateNews({ show, onHide }) {
  const { news } = useSelector(state => state.news)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [imagePreviewUrl, setImagePreviewUrl] = useState('')

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
  const submitNews = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', title)
    formData.append('text', text)
    formData.append('description', description)
    formData.append('img', image)


    createNews(formData).then(data => {
      setTitle('')
      setText('')
      setDescription('')
      setImage('')
      setImagePreviewUrl('')
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
          Create News
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
          <Form.Control
            type='file'
            onChange={changeImage}
          />
          {imagePreviewUrl && (
            <Image
              src={imagePreviewUrl}
              width={300}
              height={200} />
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Cancel</Button>
        <Button variant="outline-success" onClick={submitNews}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}
