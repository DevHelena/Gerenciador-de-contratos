import React, { useState, useEffect } from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { getDashbaord } from '../../operations/api/dashboard'
import RateReviewIcon from '@mui/icons-material/RateReview'
import PreviewIcon from '@mui/icons-material/Preview'
import './dashboard.css'
import { Link } from 'react-router-dom'

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
              <div className='contrato-info'>
                <div className='contrato-empresas'>
                <p>{contract.contratante.empresa} </p>
                <p>-</p>
                <p>{contract.contratado.empresa}</p>
                </div>

                <div className='contrato-dados'>
                <p>{contract.valor}</p>
                <p>{contract.inicioVigencia}</p>
                <p>{contract.finalVigencia}</p>
                <p>{contract.tipoContrato}</p>
                </div>
              </div>
              <div className='buttom-group'>
                <Link to={"/"}><RateReviewIcon alt="Editar Contrato"/></Link>
                <Link to={`/dashboard/${contract.key}`}><PreviewIcon alt="Vizualizar Contrato"/></Link>
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
