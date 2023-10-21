import './novoContrato.css'
import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

export const NovoContrato = () => {
  
  //select Tipo do Contrato
  const tiposContratoList = ['Empréstimos', 'Arrendamento', 'Seguro', 'Locação de Serviços', 'Equipamentos']
  const envolvidos = ['Empresa', 'CNPJ', 'Rua', 'Número', 'Cidade', 'Estado']
  const financeiro = ['Carência', 'Vigência', 'Valores', 'Prazos']

  const [tipoContrato, setTipoContrato] = React.useState('');

  const handleChange = (event) => {
    setTipoContrato(event.target.value);
  };

  return (
    <div className="container">
      <form className='contrato'>
        <FormControl fullWidth sx={{ minWidth: '200px' }}>
          <InputLabel id="demo-simple-select-label">Tipo do Contrato</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tipoContrato}
            label="Tipo do Contrato"
            onChange={handleChange}
            sx={{ width: '200px', height: '40px' }}
          >
          {tiposContratoList.map((tipo, index) => (
            <MenuItem key={index} value={tipo}> {tipo} </MenuItem>
          ))}
          </Select>
        </FormControl>

        <p>Contratante</p>
        {envolvidos.map((info, index) => (
          <input type="text" placeholder={info} key={index}/>
        ))}

        <p>Contratdo</p>
        {envolvidos.map((info, index) => (
          <input type="text" placeholder={info} key={index}/>
        ))}
        
      </form>
    </div>
  )
}