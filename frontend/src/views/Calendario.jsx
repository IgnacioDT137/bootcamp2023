import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendario() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='row row-cols-1'>
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <Calendar onChange={onChange} value={value} />
                </div>
            </div>
        </div>
    </div>
  );
} 
export default Calendario