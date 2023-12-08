import React, { useState } from 'react';

function CalenderComp() {

    const [calendar, setCalender] = useState('');
    const [open, setOpen] = useState(false);

    function handleSelect(date) {
        console.log(date);
        console.log(format(date, 'dd/MM/yyyy'));
        setCalender(format(date, 'dd/MM/yyyy'));
    }

    const refOne = useRef(null);

    function hideOnEscape(e) {
        if (e.key === 'Escape') {
            setOpen(false);
        }
    }

    return (

        <div style={{ 'textAlign': 'center' }}>
            <TextField
                label="Select Date"
                name="date"
                variant='outlined'
                value={calendar}
                onClick={() => setOpen(open => !open)}
            />
            <br />

            {open &&
                <Calendar
                    date={new Date()}
                    onChange={handleSelect}
                />}
        </div>
    )
}

export default CalenderComp;