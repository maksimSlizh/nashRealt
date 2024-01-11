import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export function Contacts() {
  return (
    <section className="mt-5">
      <div className="container">
        <h1>Наши контакты</h1>
        <div className="mt-5 d-flex justify-content-between">
          <div style={{ width: '48%' }}>
            <h4 className='mb-4'>Напиши нам!</h4>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Control type="text" placeholder="Ваше имя" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={3} placeholder="Ваше сообщение" />
              </Form.Group>

              <Button variant="outline-success">Отправить</Button>
            </Form>
          </div>
          <div style={{ width: '48%' }}>
            <h4 className='mb-4'>Лучше увидеть нас лично!</h4>
            <p>Мы любим наших клиентов, поэтому не стесняйтесь посещать нас в рабочее время.</p>
            <h4>NashRealt</h4>
            <p>Al. Grunwaldzka 76/78 lok. -106, 80-244 Gdańsk</p>
            <p>Время работы:
              Понедельник - Пятница 10:00 - 18:00
              Суббота 10:00 - 14:00
              Воскресенье - выходной</p>
            <p>+48 512-713-386 Каролина</p>
            <p>+48 518-248-134 Юлия</p>
          </div>
        </div>

        <div className='mt-5'>
          <h4>Connect with us</h4>
          <hr />
          <div className='d-flex gap-5 align-items-center pt-3 pb-5 justify-content-center'>
            <a
              href='https://t.me/Karolina_NashRealt'
              target="_blank"
              rel="noopener noreferrer"
              className='icon-link'>
              <FaTelegramPlane size={30} style={{ color: 'black' }} className='icon' />
            </a>
            <a
              href='https://www.facebook.com/nashrealt'
              target="_blank"
              rel="noopener noreferrer"
              className='icon-link'
            >
              <FaFacebook size={30} style={{ color: 'black' }} className='icon' />
            </a>
            <a
              href='https://www.youtube.com/channel/UCK33ufcWvMzTpbR2pF-PdLw'
              target="_blank"
              rel="noopener noreferrer"
              className='icon-link'
            >
              <IoLogoYoutube size={30} style={{ color: 'black' }} className='icon' />
            </a>
            <a
              href='https://www.instagram.com/nashrealt/'
              target="_blank"
              rel="noopener noreferrer"
              className='icon-link'
            >
              <FaInstagram size={30} style={{ color: 'black' }} className='icon' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
