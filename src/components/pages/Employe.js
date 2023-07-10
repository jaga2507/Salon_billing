import * as React from 'react';
import Bars_chart from '../charts/Bars_chart';
import Buttons from '@mui/material/Button';

function Customer() {

    
    const data = [
        {
            id:'1',
            customerName:'furkaan Raza',
            services:'12',
            amount:2225
        },
        {
            id:'2',
            customerName:'Salman Raza',
            services:'9',
            amount:3000
        },
        {
            id:'3',
            customerName:'Naved',
            services:'6',
            amount:2600
        },
        {
            id:'4',
            customerName:'Aalam Malik',
            services:'19',
            amount:3650
        },
        {
            id:'5',
            customerName:'Firoz Ali',
            services:'22',
            amount:3450
        },
        {
            id:'6',
            customerName:'mefoz Ali',
            services:'18',
            amount:3499
        },
        {
            id:'7',
            customerName:'karim',
            services:'0',
            amount:0
        },
        {
            id:'8',
            customerName:'nadeem Ali',
            services:'0',
            amount:0
        },
        {
            id:'9',
            customerName:'junaid',
            services:'0',
            amount: 0
        },
        {
            id:'10',
            customerName:'saleem',
            services:'0',
            amount:0
        },
    ]

    const labels = ['furkaan Raza', 'Salman Raza', 'Naved', 'Aalam Malik', 'Firoz Ali','mefoz Ali', 'karim', 'nadeem Ali', 'junaid', 'saleem'];

    const count = [2225, 3000, 2600, 3650, 3450, 3499, 0, 0, 0, 0]

  return (
    <div>
        <div className='cus_welcome' >
            Employee Details
        </div>
        {/* <div className="cus_modal" >
          Please enter the customer name
        </div> */}
        <div className='date_range' >
          <div>
            <input placeholder='Search' type='date' />
          </div>
        </div>
          <div className='cusRadar'>
            <div className='sale' >
            Employee-wise Revenue
            </div>
            <div className='billdetails' >
                <Bars_chart labels={labels} count={count} />
            </div>
        </div>
        <div className='employee' >
            <div className='todayBooking' >
                <div style={{paddingLeft:"60px"}} >
                    #
                </div>
                <div>
                    Staff
                </div>
                <div>
                    no.customer
                </div>
                <div>
                    total sale
                </div>
            </div>
            <div className='BookingDetails' >
                {data.map((item)=>(
                    <div key={item.id} >
                        <div 
                            className="empDetails" 
                        >
                            <div className="noClient" >
                                {item.id}
                            </div>
                            <div>
                                {item.customerName}
                                {/* <div>
                                    {item.customerNumber}
                                </div> */}
                            </div>
                            <div>
                                {item.services}
                            </div>
                            {/* <div className="bookingdate" >
                                <span>                          
                                    {item.date}
                                </span> 
                                <span>
                                    {item.time}
                                </span>
                            </div> */}
                            <div className="empAmount" >
                            ₹{item.amount}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Customer;