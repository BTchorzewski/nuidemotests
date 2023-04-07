import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToggleButtonComponent, ToggleSingielButtonComponent } from './components/FormComponents/toggleButtonComponent';
import { Typography } from '@mui/material';
import { TextFieldComponent } from './components/FormComponents/TextFieldComponent';
import { SelectOneFieldComponent, SelectManyFieldComponent } from './components/FormComponents/SelectFieldComponent';
import { RadioButtonComponent } from './components/FormComponents/radioButtonComponent';
import { CheckBoxComponent } from './components/FormComponents/checkBoxComponent';
import { SwitchComponent } from './components/FormComponents/switchComponent';
import { RatingComponent } from './components/FormComponents/ratingComponent';
import { AutoCompliteComponent } from './components/FormComponents/autoCompliteComponent';
function App() {
  return (
    <div className="App">
     <Typography variant={'h4'}>Toggle many buttons.</Typography>
      <ToggleButtonComponent />
      <Typography variant={'h4'}>Toggle only one button.</Typography>
      <ToggleSingielButtonComponent />
      <Typography variant={'h4'}>text field area</Typography>
      <TextFieldComponent></TextFieldComponent>
      <Typography variant={'h4'}>select one field area</Typography>
      <SelectOneFieldComponent/>
      <Typography variant={'h4'}>select many fields area</Typography>
      <SelectManyFieldComponent/>
      <Typography variant={'h4'}>radio group area</Typography>
      <RadioButtonComponent/>
      <Typography variant={'h4'}>checkbox component area</Typography>
      <CheckBoxComponent/>
      <Typography variant={'h4'}>switch component area</Typography>
      <SwitchComponent/>
      <Typography variant={'h4'}>rating component area</Typography>
      <RatingComponent />
      <Typography variant={'h4'}>autocomplite component area</Typography>
      <AutoCompliteComponent/>
    </div>
  );
}

export default App;
