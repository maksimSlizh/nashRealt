import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { createRealty } from '../../http/realtyApi';

export function CreateRealty({ show, onHide }) {
  const [title, setTitle] = useState('');
  const [titlePl, setTitlePl] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionPl, setDescriptionPl] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [rooms, setRooms] = useState('');
  const [floor, setFloor] = useState('');
  const [address, setAddress] = useState('');
  const [deposit, setDeposit] = useState('');
  const [imageUrls, setImageUrls] = useState(['']);

  const changeTitle = (e) => setTitle(e.target.value);
  const changeTitlePl = (e) => setTitlePl(e.target.value);
  const changeDescription = (e) => setDescription(e.target.value);
  const changeDescriptionPl = (e) => setDescriptionPl(e.target.value);
  const changePrice = (e) => setPrice(e.target.value);
  const changeArea = (e) => setArea(e.target.value);
  const changeRooms = (e) => setRooms(e.target.value);
  const changeFloor = (e) => setFloor(e.target.value);
  const changeAddress = (e) => setAddress(e.target.value);
  const changeDeposit = (e) => setDeposit(e.target.value);

  const addField = () => {
    setImageUrls(prevState => [...prevState, '']);
  };

  const changeField = (index) => (e) => {
    const newValue = e.target.value;
    setImageUrls(prevState => {
      const newState = [...prevState];
      newState[index] = newValue;
      return newState;
    });
  };

  const removeField = (index) => () => {
    setImageUrls(prevState => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  };

  const submitRealty = async (e) => {
    e.preventDefault();

    try {
      const realtyData = {
        title_ru: title,
        title_pl: titlePl,
        description_ru: description,
        description_pl: descriptionPl,
        price,
        area,
        rooms,
        floor,
        address,
        deposit,
        images: imageUrls,
      };

      const createdRealty = await createRealty(realtyData);
      console.log(createdRealty);

      // Очистка полей после успешного создания
      setTitle('');
      setTitlePl('');
      setDescription('');
      setDescriptionPl('');
      setPrice('');
      setArea('');
      setRooms('');
      setFloor('');
      setAddress('');
      setDeposit('');
      setImageUrls(['']);
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
        <Form onSubmit={submitRealty}>
          <Form.Control
            value={title}
            onChange={changeTitle}
            placeholder="Enter title"
          />
          <Form.Control
            value={titlePl}
            onChange={changeTitlePl}
            style={{ borderColor: 'red' }}
            placeholder="Enter title PL"
          />
          <Form.Control
            value={description}
            as="textarea"
            style={{ height: '120px' }}
            onChange={changeDescription}
            placeholder="Enter description"
          />
          <Form.Control
            value={descriptionPl}
            as="textarea"
            style={{ height: '120px', borderColor: 'red' }}
            onChange={changeDescriptionPl}
            placeholder="Enter description PL"
          />
          <Form.Control
            value={price}
            onChange={changePrice}
            placeholder="Enter price"
          />
          <Form.Control
            value={area}
            onChange={changeArea}
            placeholder="Enter area"
          />
          <Form.Control
            value={rooms}
            onChange={changeRooms}
            placeholder="Enter rooms"
          />
          <Form.Control
            value={floor}
            onChange={changeFloor}
            placeholder="Enter floor"
          />
          <Form.Control
            value={address}
            onChange={changeAddress}
            placeholder="Enter address"
          />
          <Form.Control
            value={deposit}
            onChange={changeDeposit}
            placeholder="Enter deposit"
          />
          {/* Текстовые поля для ввода URL изображений */}
          {imageUrls.map((url, index) => (
            <div key={`image_${index}`}>
              <Form.Control
                value={url}
                onChange={changeField(index)}
                placeholder="Enter image URL"
              />
              <Button onClick={removeField(index)}>-</Button>
            </div>
          ))}
          <Button onClick={addField}>+</Button>
          <Button type="submit">Add</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
