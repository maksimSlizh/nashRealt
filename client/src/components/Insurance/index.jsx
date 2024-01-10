import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { INSURANCES_ROUTE } from '../../utils/consts'
import insurance from '../../assets/img/Insurance.jpg'

export function InsuranceComponent() {
  const navigate = useNavigate()
  return (
    <section className="bg-light pb-5">
      <div className='container'>
        <div className='d-flex align-items-center pt-4 ps-5 pb-4'>
          <h3 className='text-center pe-5'>Страхование</h3>
          <NavLink to={INSURANCES_ROUTE} style={{ textDecoration: 'none' }}>Читать все</NavLink>
        </div>
        <div className='pt-4 pb-5 ps-5 bg-white d-flex justify-content-between'>
          <div className='d-flex flex-column align-items-center'>
            <ul className='mt-auto'>
              <li>Страхование от несчастных случаев</li>
              <li>Для карт Побыта, Путешествия</li>
              <li>Страхование бизнеса, учебы</li>
              <li>Страхование недвижимости</li>
              <li>ОС Zawodowa, парикмахер, врач, студент и тд. </li>
              <li>Страхование жизни и здоровья LuxMed</li>
              <li>Автострахование - ОС Graniczne на бел и укр. номерах, ОС, АС, TAXI на польских номерах </li>
            </ul>
            <Button
            className="mt-auto"
            variant="primary"
            onClick={() => navigate(INSURANCES_ROUTE)}>Узнать больше</Button>
          </div>
          <img src={insurance} alt="" style={{ width: '50%'}} height={'40%'} />
        </div>
      </div>
    </section>
  )
}
