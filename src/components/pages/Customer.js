import * as React from 'react';
import CustomerTable from './../tables/customer_table.js'
import Buttons from '@mui/material/Button';

function Customer() {
  return (
    <div>
        <div className='cus_welcome' >
            Customer Details
        </div>
        {/* <div className="cus_modal" >
          Please enter the customer name
        </div> */}
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