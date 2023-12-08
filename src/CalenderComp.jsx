import React from 'react';

function CalenderComp() {
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