import * as React from 'react';
import CustomerTable from './../tables/customer_table.js'
import Buttons from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


function Customer() {
  return (
    <div>
        <div className='cus_welcome' >
            Customer Details
        </div>
        {/* <div className="cus_modal" >
          Please enter the customer name
        </div> */}
        <div className="cus_modal" >
          Please select the date
        </div>
        <div className='date_range' >
          {/* <div>
            <input type='date' />
          </div>
          <div>
            <input type='date' />
          </div> */}
          
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateRangePicker']}>
              <DateRangePicker className='datePicker' localeText={{ start: '', end: '' }} />
            </DemoContainer>
          </LocalizationProvider>
          <div>
            <Buttons variant="contained" color="warning">Search</Buttons>
          </div>
        </div>
        <div  style={{width:"100%"}} className='date_range' >
          <div style={{width:"100%"}}>
            <input style={{width:"100%"}} placeholder='Search' type='type' />
          </div>
          <div>
            <Buttons variant="contained" color="warning">Search</Buttons>
          </div>
        </div>
        <div className='sale' >
          Customer Revenue
        </div>
        <div className='billdetails' >
          <CustomerTable/>
        </div>
    </div>
  );
}

export default Customer;