import './App.css';
import { Chip, Divider } from '@mui/material';
import CalenderComp from './components/CalenderComp';
import DateRangeComp from './components/DateRangeComp';
import DateRangePickerComp from './components/DateRangePickerComp';
import MUIDateRange from './components/MUIDateRange';

function App() {
  return (
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
  );
}

export default App;
