import { useTranslation } from 'react-i18next'
import { FaTelegramPlane, FaFacebook, FaInstagram } from "react-icons/fa"
import { IoLogoYoutube } from "react-icons/io"
const googleSheet = import.meta.env.VITE_GOOGLE_SHEET

export function Contacts() {
  const { t } = useTranslation()

  const handleSubmit = async (e) => {
    const formEle = document.querySelector('.form')
    e.preventDefault()
    const formData = new FormData(formEle)
    fetch(googleSheet, {
      method: "POST",
      body: formData
    })
    formEle.reset()
    alert(`${t('contacts.success')}`)
  }


  return (
    <section className="contacts">
      <div className="container">
        <h1 className="title-page">{t('contacts.main')}</h1>
        <div className="contacts__content">
          <div className='contacts__message'>
            <h4 className='contacts__title mb-4'>{t('contacts.messageus')}</h4>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
              <input
                placeholder={t('contacts.name')}
                className='form-control mb-3'
                name="Name"
                type='text'
              />
              <input
                placeholder='Email'
                name="Email"
                className='form-control mb-3'
                type='email'
              />
              <textarea
                placeholder={t('contacts.message')}
                name="Message"
                className="form-control mb-3"
                rows="3"
                type='text' />
              <button type="submit" className="btn btn-success contacts__btn">{t('contacts.send')}</button>
            </form>
          </div>
          <div className='contacts__info'>
            <h4 className='mb-4 contacts__title'>{t('contacts.titlesecond')}</h4>
            <p>{t('contacts.textinfo')}</p>
            <h4 className='contacts__title'>NashRealt</h4>
            <p>Al. Grunwaldzka 76/78 lok. -106, 80-244 Gdańsk</p>
            <p>{t('contacts.worktime')}</p>
            <div className='contacts__text'>
              <p>{t('contacts.worktime1')}</p>
              <p>{t('contacts.worktime2')}</p>
              <p>{t('contacts.worktime3')}</p>
              <p className='mt-4'>+48 512-713-386 {t('contacts.user1')}</p>
              <p>+48 518-248-134 {t('contacts.user2')}</p>
            </div>

          </div>
        </div>

        <div className='mt-5'>
          <h4 className='contacts__title'>{t('contacts.social')}</h4>
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
          <h4 className='contacts__title'>{t('contacts.findus')}</h4>
          <hr />

          <div className="contacts__wrapper ">
            <div>
              <iframe
                title="Видео презентация"
                src={'https://www.youtube.com/embed/paKCfJpUIP0'}
                className='contacts__video'
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="Google Maps"
                className="embed-responsive-item contacts__map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d290.482465263765!2d18.60886210920094!3d54.37712820046346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd7558be5a3e3d%3A0x3670fee0cbcf5ca7!2sNashRealt%20Karalina%20Stasiuk!5e0!3m2!1sru!2spl!4v1705656585589!5m2!1sru!2spl"
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
