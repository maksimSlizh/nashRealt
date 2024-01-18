import logo from '../../assets/img/logo.jpg'
import unilink from '../../assets/img/unilnk.jpg'

export function PrewComponent() {
  return (
    <section className="pt-1 prew" >
      <div className='container'>
        <div className='d-flex'>
          <div className='d-flex  '>
            <img src={logo} style={{ width: '40%', objectFit: 'contain' }} alt="" />
            <h2 className='ms-5 mt-auto mb-auto'>
              BIURO NEIRUCHOMOŚCI UBEZPIECZENI
            </h2>
          </div>


          <img src={unilink} style={{ width: '35%' }} alt="" />
        </div>
      </div>
    </section>
  )
}
