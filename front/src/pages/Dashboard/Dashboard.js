import React, { useState, useEffect } from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { getDashbaord } from '../../operations/api/dashboard'
import './dashboard.css'

const Dashboard = () => {
  const [contractList, setContractList] = useState([])

  useEffect(() => {
    getDashbaord().then((req) => {
      setContractList(req.contratos)
    })
  }, [])

  return (
    <>
      <Header thisPage={'dashboard'}/>
      <div className='body-component'>
      <div className='container'>
        <h1>Contratos</h1>
        <ul className='contratos-lista'>
          {contractList.map((contract, index) => (
            <li key={index} className='contratos'>
              
              <div className='contrato-empresas'>
              <p>{contract.contratante.empresa} </p>
              <p>-</p>
              <p>{contract.contratado.empresa}</p>
              </div>

              <div className='contrato-info'>
              <p>{contract.valor}</p>
              <p>{contract.inicioVigencia}</p>
              <p>{contract.finalVigencia}</p>
              <p>{contract.tipoContrato}</p>
              </div>

            </li>
          ))}
        </ul>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard
