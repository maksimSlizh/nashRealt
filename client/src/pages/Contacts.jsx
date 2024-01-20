import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Form } from 'react-bootstrap'
import { FaTelegramPlane, FaFacebook, FaInstagram } from "react-icons/fa"
import { IoLogoYoutube } from "react-icons/io"


export function Contacts() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(true)
  const { t } = useTranslation()

  function nameOnChange(e) {
    setName(e.target.value)
  }
  function emailOnChange(e) {
    const enteredEmail = e.target.value
    setEmail(enteredEmail)

    // Проверка валидности email
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(enteredEmail)
    setIsEmailValid(isValidEmail)
  }
  function messageOnChange(e) {
    setMessage(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(name, email, message)
  }


  return (
    <section className="mt-5">
      <div className="container">
        <h1>{t('contacts.main')}</h1>
        <div className="mt-5 d-flex justify-content-between">
          <div style={{ width: '48%' }}>
            <h4 className='mb-4'>{t('contacts.messageus')}</h4>
            <Form >
              <Form.Group className="mb-3" >
                <Form.Control
                  type="text"
                  value={name}
                  placeholder={t('contacts.name')}
                  onChange={nameOnChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  // Регулярное выражение для валидации email
                  required
                  onChange={emailOnChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={message}
                  placeholder={t('contacts.message')}
                  onChange={messageOnChange} />
              </Form.Group>

              <Button
                onClick={handleSubmit} variant="outline-success">{t('contacts.send')}</Button>
            </Form>
          </div>
          <div style={{ width: '48%' }}>
            <h4 className='mb-4'>{t('contacts.titlesecond')}</h4>
            <p>{t('contacts.textinfo')}</p>
            <h4>NashRealt</h4>
            <p>Al. Grunwaldzka 76/78 lok. -106, 80-244 Gdańsk</p>
            <p>{t('contacts.worktime')}</p>
              <p>{t('contacts.worktime1')}</p>
              <p>{t('contacts.worktime2')}</p>
              <p>{t('contacts.worktime3')}</p>
            <p>+48 512-713-386 {t('contacts.user1')}</p>
            <p>+48 518-248-134 {t('contacts.user2')}</p>
          </div>
        </div>

        <div className='mt-5'>
          <h4>{t('contacts.social')}</h4>
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
          <h4>{t('contacts.findus')}</h4>
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
