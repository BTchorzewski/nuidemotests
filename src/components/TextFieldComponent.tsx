import { InputAdornment, Stack, TextField } from '@mui/material';
import ScaleIcon from '@mui/icons-material/Scale';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useState } from 'react';
export const TextFieldComponent = () => {
  const [passwordValue, setPasswordValue] = useState('')
  return (
    <Stack spacing={4}>
      <Stack direction={'row'} spacing={2}>
      <TextField label={'standard'} variant={'standard'}/>
      <TextField label={'filled'} variant={'filled'}/>
      <TextField label={'outlined'} variant={'outlined'}/>
      </Stack>
      <Stack direction={'row'} spacing={2}>
        <TextField label={'standard primary'} variant={'standard'} color={'primary'} size={'small'} required/>
        <TextField label={'filled error'} variant={'filled'} color={'error'} size={'medium'}/>
        <TextField label={'outlined secondary'} variant={'outlined'} color={'secondary'} helperText={'Nie przekazuj hasła.'} type={'password'}/>
      </Stack>
      <Stack direction={'row'} spacing={2}>
        <TextField label={'Amount'} variant={'standard'} color={'primary'} size={'small'} required InputProps={{
          startAdornment: <InputAdornment position={'start'}><AttachMoneyIcon/></InputAdornment>
        }}
        type={'number'}/>
        <TextField
          label={'password'}
          variant={'filled'}
          color={'error'}
          size={'medium'}
          InputProps={{
          endAdornment: <InputAdornment position={'end'}><ScaleIcon/></InputAdornment>}}
          type={'password'}
          value={passwordValue}
          onChange={(e)=>setPasswordValue(e.target.value)}
          required
          helperText={!passwordValue ? 'required' : 'Do not share your password'}
          error={!passwordValue}
        />
      </Stack>
    </Stack>
  )
}