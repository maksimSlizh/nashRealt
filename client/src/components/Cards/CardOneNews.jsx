export function CardOneNews(props) {
  return (
    <section className='mt-5'>
      <div className="container">
        <h2>{props.title}</h2>
        <div className='mt-4 d-flex justify-content-between'>
          <p className='text-center mt-auto mb-auto'>{props.description}</p>
          <img
          src={import.meta.env.VITE_REACT_APP_API_URL + props.img}
          alt=""
          style={{width: '48%', objectFit: 'cover', maxHeight: '60vh'}}/>
        </div>
        <hr className='mt-2' />
        <p className='pt-2'>{props.text}</p>
      </div>
    </section>
  )
}
