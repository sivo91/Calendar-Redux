
import React, { use, useEffect, useState } from 'react';

import axios from 'axios'
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'
import { useSelector,useDispatch } from 'react-redux'
import { addDay } from '@/reduxFile/daysSlice';


const App = () => {

const { days } = useSelector((state) => state.selectedDays)
console.log('data from redux :', days)
const dispatch = useDispatch()


let disabledDates = {};

useEffect(() => {

}, [days])

const handleClick = (date) => {
  const selectedDate = new Date(date);
  dispatch(addDay(JSON.stringify(selectedDate)))
  const month = selectedDate.getMonth();
  const disabledMonthDates = disabledDates[month] || [];
  const selectedDay = selectedDate.getDate();

  if (!disabledMonthDates.includes(selectedDay)) {
    disabledMonthDates.push(selectedDay);
  } else {
    const index = disabledMonthDates.indexOf(selectedDay);
    disabledMonthDates.splice(index, 1);
  }
  disabledDates[month] = disabledMonthDates;
};



  return (

    <>
       
    

       <h2 className='text-center mt-5 pt-5'>Calendar</h2>

      <div className="calendar mt-5 mb-5">
      <ReactCalendar

        minDate={new Date()}
        tileDisabled={({ date }) =>
          disabledDates[date.getMonth()]?.includes(date.getDate())
        } 
        //onClickDay={handleClick}
        onClickDay={(date) => { handleClick(date)/* ; dispatch(addDay(JSON.stringify(date))) */ }}
        
        />
      </div>




    <div className="output text-center">
 
    </div>



  <style>{`
     
      .calendar {
        position: relative;
        width: 375px;
        margin: 0 auto;
      }


    
    `}</style>
    
    </>
  )
}

export default App