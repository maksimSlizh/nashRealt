import { useState,} from 'react'
import { CreateNews } from '../components/modals/CreateNews'
import { CreateInsurance } from '../components/modals/CreateInsurance'
import { CreateRealty } from '../components/modals/CreateRealty'


export function Admin() {

  const [newsVisible, setNewsVisible] = useState(false)
  const [insuranceVisible, setInsuranceVisible] = useState(false)
  const [realtyVisible, setRealtyVisible] = useState(false)


  return (
    <div className="container d-flex flex-column">
      <button
      className="btn btn-outline-success mt-3 p-2"
      onClick={() => setNewsVisible(true)}
      >Add news</button>
      <button
      className="btn btn-outline-success mt-3 p-2"
      onClick={() => setInsuranceVisible(true)}
      >Add insurance</button>
      <button
      className="btn btn-outline-success mt-3 p-2"
      onClick={() => setRealtyVisible(true)}
      >Add realty</button>

      <CreateNews show={newsVisible} onHide={() => setNewsVisible(false)} />
      <CreateInsurance show={insuranceVisible} onHide={() => setInsuranceVisible(false)} />
      <CreateRealty show={realtyVisible} onHide={() => setRealtyVisible(false)} />
    </div>
  )
}
