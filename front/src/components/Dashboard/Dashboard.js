import React, { useState, useEffect } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { getDashbaord } from '../../operations/api/dashboard'

const Dashboard = () => {
  const [contractList, setContractList] = useState([])

  useEffect(() => {
      getDashbaord().then((req) => {
        console.log(req);
        setContractList(req.contratos)
      })
  }, [])

  return (
    <>
      <Header thisPage={'dashboard'}/>
      <div className='body-component'>
      <div className='container'>
        <ul>
        {
          contractList && contractList.length > 0 
          ? 
          contractList.map((e)=>(
            <>
            <h3>CONTRATANTE</h3>
            <li>{e.contratante.empresa}</li>
            <li>{e.contratante.cnpj}</li>
            <li>{e.contratante.rua}</li>
            <li>{e.contratante.numero}</li>
            <li>{e.contratante.estado}</li>
            <li>{e.contratante.cidade}</li>
            </>
          ))
          : 
          <li>Não encontrado CONTRATANTE</li>
        }
        </ul>
        <ul>
        {
          contractList && contractList.length > 0 
          ? 
          contractList.map((e)=>(
            <>
            <h3>CONTRATADO</h3>
            <li>{e.contratado.empresa}</li>
            <li>{e.contratado.cnpj}</li>
            <li>{e.contratado.rua}</li>
            <li>{e.contratado.numero}</li>
            <li>{e.contratado.estado}</li>
            <li>{e.contratado.cidade}</li>
            </>
          ))
          : 
          <li>Não encontrado CONTRATADO</li>
        }
        </ul>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard
