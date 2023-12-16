import prew from '../../assets/img/prew.webp'

export function Prew () {
  return (
    <section className="mt-3">
      <div className="container">
      <img src={prew} alt="" className="img__prew" style={{width: '100%', height: 'auto'}}/>
      </div>
    </section>
  )
}
