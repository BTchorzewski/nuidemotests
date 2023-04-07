import { Box, FormControlLabel, FormLabel, Switch } from '@mui/material';
import { useState } from 'react';

export const SwitchComponent = () => {
  const [checked, setChecked] = useState(false)
  console.log({switch: checked})
  return (
    <Box marginTop={15}>
      <FormLabel>Switch controller</FormLabel>
      <Box><FormControlLabel control={<Switch checked={checked} onChange={event => setChecked(!checked)}/>} label={'turn light mode'}/></Box>
    </Box>
  )
}