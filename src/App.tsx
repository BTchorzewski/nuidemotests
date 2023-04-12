import React from 'react';
import './App.css';
import {
  ToggleButtonComponent,
  ToggleSingielButtonComponent,
} from './components/FormComponents/toggleButtonComponent';
import { Stack, Typography, Divider } from '@mui/material';
import { TextFieldComponent } from './components/FormComponents/TextFieldComponent';
import {
  SelectOneFieldComponent,
  SelectManyFieldComponent,
} from './components/FormComponents/SelectFieldComponent';
import { RadioButtonComponent } from './components/FormComponents/radioButtonComponent';
import { CheckBoxComponent } from './components/FormComponents/checkBoxComponent';
import { SwitchComponent } from './components/FormComponents/switchComponent';
import { RatingComponent } from './components/FormComponents/ratingComponent';
import { AutoCompleteComponent } from './components/FormComponents/autoCompleteComponent';
import { BoxComponent } from './components/layoutComponents/boxComponent';
import { StackComponent } from './components/layoutComponents/stackComponent';
import { GridComponent } from './components/layoutComponents/gridComponent';
import { CardComponent } from './components/cardComponent';
function App() {
  return (
    <Stack
      className='App'
      component='div'
      divider={<Divider orientation={'horizontal'} flexItem />}
      spacing={1}
    >
      <Typography variant={'h4'}>Toggle many buttons.</Typography>
      <ToggleButtonComponent />
      <Typography variant={'h4'}>Toggle only one button.</Typography>
      <ToggleSingielButtonComponent />
      <Typography variant={'h4'}>text field area</Typography>
      <TextFieldComponent></TextFieldComponent>
      <Typography variant={'h4'}>select one field area</Typography>
      <SelectOneFieldComponent />
      <Typography variant={'h4'}>select many fields area</Typography>
      <SelectManyFieldComponent />
      <Typography variant={'h4'}>radio group area</Typography>
      <RadioButtonComponent />
      <Typography variant={'h4'}>checkbox component area</Typography>
      <CheckBoxComponent />
      <Typography variant={'h4'}>switch component area</Typography>
      <SwitchComponent />
      <Typography variant={'h4'}>rating component area</Typography>
      <RatingComponent />
      <Typography variant={'h4'}>autocomplete component area</Typography>
      <AutoCompleteComponent />
      <Typography variant={'h4'}>box component area</Typography>
      <BoxComponent />
      <Typography variant={'h4'}>stack component area</Typography>
      <StackComponent />
      <Typography variant={'h4'}>grid component area</Typography>
      <GridComponent />
      <Typography variant={'h4'}>card component area</Typography>
      <CardComponent />
    </Stack>
  );
}

export default App;
