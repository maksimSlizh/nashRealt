import { Image } from 'react-bootstrap'

export function CardOne(props) {
  return (

    <>
      <section className='bg-light'>
        <div className="container bg-white">
          <h2 className='pt-5 text-center'>{props.title}</h2>
          <div className='mt-5 d-flex justify-content-center ms-auto me-auto'
            style={{ width: '60%', }}>
            <Image
              src={import.meta.env.VITE_REACT_APP_API_URL + props.img}
              alt=""
              style={{ objectFit: 'cover', maxHeight: '60vh' }}
            />
          </div>
        </div>
      </section>
      <section className='bg-light'>
        <div className='container bg-white'>
          <div className='pt-4 '>
            <p className='p-4' style={{ whiteSpace: 'pre-line', wordWrap: 'break-word', textAlign: 'justify' }}>{props.text}</p>
          </div>
        </div>
      </section>
    </>
  )
}
