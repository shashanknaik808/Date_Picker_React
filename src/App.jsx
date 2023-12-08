import './App.css';
import { Chip, Divider } from '@mui/material';
import CalenderComp from './CalenderComp';

function App() {
  return (
    <>
      <Divider>
        <Chip label="Calender" />
      </Divider>
      <CalenderComp />
    </>
  );
}

export default App;
