import logo from '../../assets/img/logo.webp'
import unilink from '../../assets/img/unilnk.webp'

export function PrewComponent() {
  return (
    <section className="pt-1 prew" >
      <div className='container'>
        <div className='d-flex'>
          <div className='prew__info'>
            <img src={logo}
            className='prew__logo'
            alt="NashRealt"
            loading='lazy' />
            <h2 className='prew__title'>
              BIURO NEIRUCHOMOŚCI UBEZPIECZENIE
            </h2>
          </div>


          <img
          src={unilink}
          className='prew__partner'
          alt="Unilink"
          loading='lazy' />
        </div>
      </div>
    </section>
  )
}
