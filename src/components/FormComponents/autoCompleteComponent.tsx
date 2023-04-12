import { Autocomplete, Stack, TextField } from '@mui/material';
import { useState } from 'react';

export const AutoCompleteComponent = () => {
  const skills = ['CSS', 'HTML', 'Typescript'];
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  console.log({ selectedValue });
  return (
    <Stack spacing={2} width={'250px'}>
      <Autocomplete
        renderInput={(params) => <TextField {...params} label='skill' />}
        options={skills}
        value={selectedValue}
        onChange={(event, value) => setSelectedValue(value)}
        freeSolo
      />
    </Stack>
  );
};
