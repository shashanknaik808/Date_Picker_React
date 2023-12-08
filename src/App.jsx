import './App.css';
import { Chip, Divider } from '@mui/material';
import CalenderComp from './components/CalenderComp';
import DateRangeComp from './components/DateRangeComp';
import DateRangePickerComp from './components/DateRangePickerComp';

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
    </>
  );
}

export default App;
