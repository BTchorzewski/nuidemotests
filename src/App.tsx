import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ToggleButtonComponent, ToggleSingielButtonComponent } from './components/toggleButtonComponent';
import { Typography } from '@mui/material';
import { TextFieldComponent } from './components/TextFieldComponent';
import { SelectOneFieldComponent, SelectManyFieldComponent } from './components/SelectFieldComponent';
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
    </div>
  );
}

export default App;
