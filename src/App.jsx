import './App.css';
import { Chip, Divider } from '@mui/material';
import CalenderComp from './components/CalenderComp';
import DateRangeComp from './components/DateRangeComp';

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
    </>
  );
}

export default App;
