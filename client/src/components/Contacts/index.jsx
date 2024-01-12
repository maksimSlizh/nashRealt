import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CONTACTS_ROUTE } from '../../utils/consts';

export function ContactsComponent() {
  const navigate = useNavigate();
  return (
    <section className="bg-dark ">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className='d-flex align-items-center pt-4 ps-5 pb-5'>
          <h3 className='text-white'>Свяжись с нами</h3>
        </div>

        <div className='pb-5 ps-5 d-flex justify-content-between'>
          <div className='d-flex flex-column'>

            <div >
              <p className='text-white'>+48 512-713-386 Каролина</p>
              <p className='text-white'>+48 518-248-134 Юлия</p>
            </div>

            <div className='d-flex gap-4 align-items-center pt-3 pb-5'>
              <a
                href='https://t.me/Karolina_NashRealt'
                target="_blank"
                rel="noopener noreferrer"
                className='icon-link'>
                <FaTelegramPlane size={30} style={{ color: 'white' }} className='icon' />
              </a>
              <a
                href='https://www.facebook.com/nashrealt'
                target="_blank"
                rel="noopener noreferrer"
                className='icon-link'
              >
                <FaFacebook size={30} style={{ color: 'white' }} className='icon' />
              </a>
              <a
                href='https://www.youtube.com/channel/UCK33ufcWvMzTpbR2pF-PdLw'
                target="_blank"
                rel="noopener noreferrer"
                className='icon-link'
              >
                <IoLogoYoutube size={30} style={{ color: 'white' }} className='icon' />
              </a>
              <a
                href='https://www.instagram.com/nashrealt/'
                target="_blank"
                rel="noopener noreferrer"
                className='icon-link'
              >
                <FaInstagram size={30} style={{ color: 'white' }} className='icon' />
              </a>
            </div>

            <Button
              variant="outline-light"
              className='mt-auto'
              onClick={() => navigate(CONTACTS_ROUTE)}>Перейти к контактам</Button>
          </div>



        </div>
      </div>
    </section>
  )
}
