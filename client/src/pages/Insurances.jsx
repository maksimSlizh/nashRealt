import insurance from '../assets/img/Insurance.jpg'
import inrealty from '../assets/img/InRealty.jpg'
import inmed from '../assets/img/InMed.jpg'
import incars from '../assets/img/InCars.jpg'
import incars2 from '../assets/img/InCars2.webp'
import inpobyt from '../assets/img/InPobyt.jpg'

export function Insurances() {
  return (
    <section className='mt-5'>
      <div className='container'>
        <h1>Страхование</h1>

        <div className='pt-4 pb-5 bg-white d-flex justify-content-between gap-5'>
          <img src={insurance} alt="" style={{ width: '50%' }} height={'40%'} />
          <div className='d-flex flex-column align-items-center mt-auto mb-auto'>
            <h5>Предлагаем следующие виды страхования:</h5>
            <ul className='mt-4'>
              <li>Страхование от несчастных случаев</li>
              <li>Для карт Побыта, Путешествия</li>
              <li>Страхование бизнеса, учебы</li>
              <li>Страхование недвижимости</li>
              <li>ОС Zawodowa, парикмахер, врач, студент и тд. </li>
              <li>Страхование жизни и здоровья LuxMed</li>
              <li>Автострахование - ОС Graniczne на бел и укр. номерах, ОС, АС, TAXI на польских номерах </li>
            </ul>
          </div>
        </div>

        <div className='pt-4 pb-5 bg-white d-flex justify-content-between gap-5'>
          <div className='d-flex flex-column align-items-center mt-auto mb-auto'>
            <h5>Страхование недвижимости / OC Najemcy / Страхование кредитов</h5>
            <p className='mt-4'>
              Предлагаем Вам услугу страхования OC Najemcy для арендуемой квартиры или собственной недвижимости: -от пожара, затопления, ущерба причиненного животными и т.д.
            </p>
          </div>
          <img src={inrealty} alt="" style={{ width: '50%' }} height={'40%'} />
        </div>

        <div className='pt-4 pb-5 bg-white d-flex justify-content-between gap-5'>
          <div className='d-flex flex-column align-items-center mt-auto mb-auto'>
            <h5>АБОНЕМЕНТ LUXMED</h5>
            <ul className='mt-4'>
              <li>Медицинское амбулаторное/стационарное лечение</li>
              <li>Индивидуальные/Партнерские/Семейные пакеты </li>
              <li>Фирмы, ИП от 2 человек и более</li>
              <li>Консультации, подбор оптимального варианта</li>
            </ul>
          </div>
          <img src={inmed} alt="" style={{ width: '50%' }} height={'40%'} />
        </div>

        <div className='pt-4 pb-5 bg-white d-flex justify-content-between gap-5'>
          <div className='d-flex flex-column align-items-center mt-auto mb-auto'>
            <h5>Страхование автомобилей</h5>
          </div>
          <img src={incars} alt="" style={{ width: '50%' }} height={'40%'} />
        </div>

        <div className='pt-4 pb-5 bg-white d-flex justify-content-between gap-5'>
          <div className='d-flex flex-column align-items-center mt-auto mb-auto'>
            <h5>ОС Graniczne (на бел. и укр. номерах 150зл/мес 930 зл/год)</h5>
          </div>
          <img src={incars2} alt="" style={{ width: '50%' }} height={'40%'} />
        </div>

        <div className='pt-4 pb-5 bg-white d-flex justify-content-between gap-5'>
          <div className='d-flex flex-column align-items-center mt-auto mb-auto'>
            <h5>ДЛЯ KARTY POBYTU/ВИЗЫ от WIENER</h5>
            <ul className='mt-4'>
              <li>Страховая сумма на 30 000 евро;</li>
              <li>от месяца до года;</li>
              <li>страховая  Wiener, чьи страховки принимаются в Urząd Do Spraw Cudzoziemców;</li>
              <li>оплата скорой помощи, пребывания в больнице, лечения и операций, обострения хронических заболеваний, COVID19;</li>
              <li>инфо линия на украинском, английском, русском, польском.</li>
            </ul>
          </div>
          <img src={inpobyt} alt="" style={{ width: '50%' }} height={'40%'} />
        </div>
      </div>
    </section>
  )
}
