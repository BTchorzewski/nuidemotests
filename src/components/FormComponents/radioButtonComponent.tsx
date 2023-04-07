import { Box, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { useState } from 'react';

export const RadioButtonComponent = () => {
  const [radioValue, setRadioValue] = useState('')
  console.log({ radioValue })
  return (
    <Box>
      <FormControl>
        <FormLabel id={'job-experience-group-label'}>
          Years of experience:
        </FormLabel>
        <RadioGroup
          name={'job-experience-group'}
          aria-labelledby={'job-experience-group-label'}
          value={radioValue}
          onChange={event => setRadioValue(event.target.value)}
          row
        >
          <FormControlLabel control={<Radio size={'small'} color={'error'}/>} label={'0-2'} value={'0-2'} autoFocus/>
          <FormControlLabel control={<Radio/>} label={'3-5'} value={'3-5'}/>
          <FormControlLabel control={<Radio/>} label={'6-8'} value={'6-8'}/>
        </RadioGroup>
      </FormControl>
    </Box>
  )
}