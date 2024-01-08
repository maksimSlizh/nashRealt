import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal, Form, Image } from 'react-bootstrap';
import { createRealty } from '../../http/realtyApi';

export function CreateRealty({ show, onHide }) {
  const { realty } = useSelector((state) => state.realty);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [rooms, setRooms] = useState('');
  const [floor, setFloor] = useState('');
  const [images, setImages] = useState([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);

  const changeTitle = (e) => setTitle(e.target.value);
  const changeDescription = (e) => setDescription(e.target.value);
  const changePrice = (e) => setPrice(e.target.value);
  const changeArea = (e) => setArea(e.target.value);
  const changeRooms = (e) => setRooms(e.target.value);
  const changeFloor = (e) => setFloor(e.target.value);

  const changeImages = (e) => {
    const files = Array.from(e.target.files);

    // Создание превью для каждого изображения
    const urls = files.map((file) => URL.createObjectURL(file));
    setImagePreviewUrls(urls);

    setImages(files);
  };

  const submitRealty = async (e) => {
    e.preventDefault();

    try {
      // Создание объекта недвижимости
      const formData = new FormData();

    // Добавление данных о недвижимости в formData
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('area', area);
    formData.append('rooms', rooms);
    formData.append('floor', floor);

    // Добавление изображений в formData
    images.forEach((image) => {
      formData.append('images', image);
    });
    console.log([...formData.entries()]);

      const createdRealty = await createRealty(formData);
      console.log(createdRealty);

      // Очистка полей после успешного создания
      setTitle('');
      setDescription('');
      setPrice('');
      setArea('');
      setRooms('');
      setFloor('');
      setImages([]);
      setImagePreviewUrls([]);
      onHide();
    } catch (error) {
      console.error('Ошибка при создании объекта недвижимости:', error);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create Realty</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={title} onChange={changeTitle} placeholder="Enter title" />
          <Form.Control value={description} onChange={changeDescription} placeholder="Enter description" />
          <Form.Control value={price} onChange={changePrice} placeholder="Enter price" />
          <Form.Control value={area} onChange={changeArea} placeholder="Enter area" />
          <Form.Control value={rooms} onChange={changeRooms} placeholder="Enter rooms" />
          <Form.Control value={floor} onChange={changeFloor} placeholder="Enter floor" />
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
  );
}
