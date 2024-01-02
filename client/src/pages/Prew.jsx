import prew from '../assets/img/prew.webp'

export function Prew() {
  return (
    <>
      <div className="container">
        <section className="mt-3">
          <img src={prew} alt="" className="img__prew" style={{ width: '100%', height: 'auto' }} />
        </section>
        <section className="mt-3">
          <div className='prew__news-grid'>
            SOME NEWS
          </div>
        </section>
        <section className="mt-3">
          <h3>Insurance</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita voluptas atque aspernatur quae sunt omnis, placeat tempora quas suscipit velit ipsam sint!</p>
          <a href="#">Read more</a>
        </section>
        <section className="mt-3">
          <h3>Realty</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita voluptas atque aspernatur quae sunt omnis, placeat tempora quas suscipit velit ipsam sint!</p>
          <a href="#">Read more</a>
        </section>
        <section className="mt-3">
          <h3>Contacts</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita voluptas atque aspernatur quae sunt omnis, placeat tempora quas suscipit velit ipsam sint!</p>
          <a href="#">Read more</a>
        </section>
        <footer>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <p>&copy; 2022. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
