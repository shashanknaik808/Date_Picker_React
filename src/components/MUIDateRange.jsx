import { Box, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import React, { useState } from 'react';

function MUIDateRange() {
    const [value, setValue] = useState([null, null]);

    return (
        <div>MUIDateRange</div>
    )
}

export default MUIDateRange;