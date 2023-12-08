import { addDays } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';

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
        <div>DateRangeComp</div>
    );
}

export default DateRangeComp;