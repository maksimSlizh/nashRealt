import logo from '../../assets/img/logo.jpg'
import unilink from '../../assets/img/unilnk.jpg'

export function PrewComponent() {
  return (
    <section className="pt-1 prew" >
      <div className='container'>
        <div className='d-flex'>
          <div className='prew__info'>
            <img src={logo}
            className='prew__logo'
            alt="" />
            <h2 className='prew__title'>
              BIURO NEIRUCHOMOŚCI UBEZPIECZENI
            </h2>
          </div>


          <img src={unilink}
          className='prew__partner' alt="" />
        </div>
      </div>
    </section>
  )
}
