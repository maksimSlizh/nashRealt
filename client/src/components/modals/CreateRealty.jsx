import { useState } from 'react'
import { Button, Modal, Form, Image } from 'react-bootstrap'
import { createRealty } from '../../http/realtyApi'

export function CreateRealty({ show, onHide }) {
  const [title, setTitle] = useState('')
  const [titlePl, setTitlePl] = useState('')
  const [description, setDescription] = useState('')
  const [descriptionPl, setDescriptionPl] = useState('')
  const [price, setPrice] = useState('')
  const [area, setArea] = useState('')
  const [rooms, setRooms] = useState('')
  const [floor, setFloor] = useState('')
  const [images, setImages] = useState([])
  const [imagePreviewUrls, setImagePreviewUrls] = useState([])
  const [address, setAddress] = useState('')
  const [deposit, setDeposit] = useState('')

  const changeTitle = (e) => setTitle(e.target.value)
  const changeTitlePl = (e) => setTitlePl(e.target.value)
  const changeDescription = (e) => setDescription(e.target.value)
  const changeDescriptionPl = (e) => setDescriptionPl(e.target.value)
  const changePrice = (e) => setPrice(e.target.value)
  const changeArea = (e) => setArea(e.target.value)
  const changeRooms = (e) => setRooms(e.target.value)
  const changeFloor = (e) => setFloor(e.target.value)
  const changeAddress = (e) => setAddress(e.target.value)
  const changeDeposit = (e) => setDeposit(e.target.value)

  const changeImages = (e) => {
    const files = Array.from(e.target.files)

    // Создание превью для каждого изображения
    const urls = files.map((file) => URL.createObjectURL(file))
    setImagePreviewUrls(urls)

    setImages(files);
  }

  const submitRealty = async (e) => {
    e.preventDefault();

    try {
      // Создание объекта недвижимости
      const formData = new FormData();

    // Добавление данных о недвижимости в formData
    formData.append('title_ru', title)
    formData.append('title_pl', titlePl)
    formData.append('description_ru', description)
    formData.append('description_pl', descriptionPl)
    formData.append('price', price)
    formData.append('area', area)
    formData.append('rooms', rooms)
    formData.append('floor', floor)
    formData.append('address', address)
    formData.append('deposit', deposit)

    // Добавление изображений в formData
    images.forEach((image) => {
      formData.append('images', image)
    })
    console.log([...formData.entries()])

      const createdRealty = await createRealty(formData)
      console.log(createdRealty)

      // Очистка полей после успешного создания
      setTitle('')
      setTitlePl('')
      setDescription('')
      setDescriptionPl('')
      setPrice('')
      setArea('')
      setRooms('')
      setFloor('')
      setAddress('')
      setDeposit('')
      setImages([])
      setImagePreviewUrls([])
      onHide()
    } catch (error) {
      console.error('Ошибка при создании объекта недвижимости:', error)
    }
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create Realty</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
          value={title}
          onChange={changeTitle}
          placeholder="Enter title" />
          <Form.Control
          value={titlePl}
          onChange={changeTitlePl}
          style={{ borderColor: 'red' }}
          placeholder="Enter title PL" />
          <Form.Control
          value={description}
          as="textarea"
          style={{ height: '120px' }}
          onChange={changeDescription}
          placeholder="Enter description" />
          <Form.Control
          value={descriptionPl}
          as="textarea"
          style={{ height: '120px', borderColor: 'red' }}
          onChange={changeDescriptionPl}
          placeholder="Enter description PL" />
          <Form.Control value={price} onChange={changePrice} placeholder="Enter price" />
          <Form.Control value={area} onChange={changeArea} placeholder="Enter area" />
          <Form.Control value={rooms} onChange={changeRooms} placeholder="Enter rooms" />
          <Form.Control value={floor} onChange={changeFloor} placeholder="Enter floor" />
          <Form.Control value={address} onChange={changeAddress} placeholder="Enter address" />
          <Form.Control value={deposit} onChange={changeDeposit} placeholder="Enter deposit" />
          <Form.Control type="file" multiple onChange={changeImages} />
          {imagePreviewUrls.map((url, index) => (
            <Image key={index} src={url} width={300} height={200} />
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="outline-success" onClick={submitRealty}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
