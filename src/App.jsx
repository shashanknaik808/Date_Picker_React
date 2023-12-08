import React from 'react';
import './App.css';
import { Chip, Divider, ThemeProvider, createTheme } from '@mui/material';
import CalenderComp from './components/CalenderComp';
import DateRangeComp from './components/DateRangeComp';
import DateRangePickerComp from './components/DateRangePickerComp';
import MUIDateRange from './components/MUIDateRange';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <Divider>
          <Chip label="Calender" />
        </Divider>

        <CalenderComp />

        <Divider>
          <Chip label="Date Range" />
        </Divider>

        <DateRangeComp />

        <Divider>
          <Chip label="Data Range Picker" />
        </Divider>

        <DateRangePickerComp />

        <Divider>
          <Chip label="MUI Date Range Picker" />
        </Divider>

        <MUIDateRange />
      </>
    </ThemeProvider>
  );
}

export default App;
