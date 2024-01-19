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
          <h4>Мы в социальных сетях</h4>
          <hr />
          <div className='d-flex gap-5 align-items-center pt-4 pb-4  justify-content-center'>
            <a
              href='https://t.me/Karolina_NashRealt'
              target="_blank"
              rel="noopener noreferrer"
              className='icon-link'>
              <FaTelegramPlane size={40} style={{ color: 'black' }} className='icon' />
            </a>
            <a
              href='https://www.facebook.com/nashrealt'
              target="_blank"
              rel="noopener noreferrer"
              className='icon-link'
            >
              <FaFacebook size={40} style={{ color: 'black' }} className='icon' />
            </a>
            <a
              href='https://www.youtube.com/channel/UCK33ufcWvMzTpbR2pF-PdLw'
              target="_blank"
              rel="noopener noreferrer"
              className='icon-link'
            >
              <IoLogoYoutube size={40} style={{ color: 'black' }} className='icon' />
            </a>
            <a
              href='https://www.instagram.com/nashrealt/'
              target="_blank"
              rel="noopener noreferrer"
              className='icon-link'
            >
              <FaInstagram size={40} style={{ color: 'black' }} className='icon' />
            </a>
          </div>
        </div>

        <div className='mt-3'>
          <h4>Как нас найти</h4>
          <hr />

          <div className="d-flex justify-content-between pt-3 pb-4">
            <div>
              <iframe
                title="Видео презентация"
                src={'https://www.youtube.com/embed/paKCfJpUIP0'}
                width="400"
                height="450"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="Google Maps"
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d290.482465263765!2d18.60886210920094!3d54.37712820046346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd7558be5a3e3d%3A0x3670fee0cbcf5ca7!2sNashRealt%20Karalina%20Stasiuk!5e0!3m2!1sru!2spl!4v1705656585589!5m2!1sru!2spl"
                width="500"
                height="450"
                style={{ border: '1px solid rgba(0, 0, 0, 0.2)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
