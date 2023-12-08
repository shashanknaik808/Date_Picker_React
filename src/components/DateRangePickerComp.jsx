import React from 'react';

function DateRangePickerComp() {

    const [range, setRange] = useState([{
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
    }]);

    const [open, setOpen] = useState(false);
    const refOne = useRef(null);

    function hideOnEscape(e) {
        if (e.key === 'Escape') {
            setOpen(false);
        }
    }

    return (
        <div>DateRangePickerComp</div>
    )
}

export default DateRangePickerComp;