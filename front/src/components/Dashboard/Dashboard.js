import React, { useState, useEffect } from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'

const Dashboard = () => {
  const [formList, setFormList] = useState([])

    useEffect(() => {
      // Realiza a requisição GET para buscar a lista de formulários
      fetch('/api/formularios')
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setFormList(data)
        })
        .catch((error) => {
          console.error('Erro ao buscar a lista de formulários:', error)
        })
    }, [])

  return (
    <>
      <Header thisPage={'dashboard'}/>
      <div className='body-component'>
      <div className='container'>
        <ul>
          {formList.map((formData, index) => (
            <li key={index}>{JSON.stringify(formData)}</li>
          ))}
        </ul>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default Dashboard