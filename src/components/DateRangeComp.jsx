import React, { useEffect, useState, useRef } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { TextField } from '@mui/material';
import { addDays } from 'date-fns';
import format from 'date-fns/format';

function DateRangeComp() {

    const [range, setRange] = useState([{
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
    }]);

    const [open, setOpen] = useState(false);
    const refOne = useRef(null);

    function hideOnEscape(e) {
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    function hideOnClickOutside(e) {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", hideOnEscape, true);
        document.addEventListener("click", hideOnClickOutside, true);
    }, [])

    return (
        <div style={{ 'textAlign': 'center' }}>
            <TextField
                label="Select Date"
                name="date"
                variant='outlined'
                value={`${format(range[0].startDate, 'dd/MM/yyyy')} -to- ${format(range[0].endDate, 'dd/MM/yyyy')}`}
                onClick={() => setOpen(open => !open)}
            />
            <br />

            <div ref={refOne}>
                {open &&
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setRange([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={range}
                        months={2}
                        direction='horizontal'
                    />}
            </div>
        </div>
    );
}

export default DateRangeComp;