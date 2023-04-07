import { FormControl, MenuItem, TextField } from '@mui/material';
import { useState } from 'react';

export const SelectOneFieldComponent = () => {
  const [country, setCountry] = useState('');

  return (
    <FormControl sx={{
      width: '250px'
    }}>
      <TextField
        label={'Select your country'}
        select
        value={country}
        onChange={(e)=>setCountry(e.target.value)}
        fullWidth
        helperText={`You have choosen ${country}`}
      >
        <MenuItem value={'pl'}>Poland</MenuItem>
        <MenuItem value={'ge'}>Germany</MenuItem>
        <MenuItem value={'fr'}>France</MenuItem>
      </TextField>
    </FormControl>
  )
}

export const SelectManyFieldComponent = () => {
  const [countries, setCountries] = useState([]);

  return (
    <FormControl sx={{
      width: '250px'
    }}>
      <TextField
        label={'Select your country'}
        select
        value={countries}
        onChange={(e)=>{
          const value = e.target.value;
          // @ts-ignore
          setCountries(typeof value === 'string' ? value.split(',') : value)
        }}
        fullWidth
        helperText={`You have choosen ${countries}`}
        SelectProps={{multiple: true}}
      >
        <MenuItem value={'pl'}>Poland</MenuItem>
        <MenuItem value={'ge'}>Germany</MenuItem>
        <MenuItem value={'fr'}>France</MenuItem>
      </TextField>
    </FormControl>
  )
}