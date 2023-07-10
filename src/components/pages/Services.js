import * as React from 'react';
import Bars_chart from '../charts/Bars_chart';
import Buttons from '@mui/material/Button';

function Customer() {

    
    const data = [
        {
            id:'1',
            customerName:'furkaan Raza',
            services:'12',
            amount:'₹2,225'
        },
        {
            id:'2',
            customerName:'Salman Raza',
            services:'9',
            amount:'₹3,000'
        },
        {
            id:'3',
            customerName:'Naved',
            services:'6',
            amount:'₹2,600'
        },
        {
            id:'4',
            customerName:'Aalam Malik',
            services:'19',
            amount:'₹3,650'
        },
        {
            id:'5',
            customerName:'Firoz Ali',
            services:'22',
            amount:'₹3,450'
        },
        {
            id:'6',
            customerName:'mefoz Ali',
            services:'18',
            amount:'₹3,499'
        },
        {
            id:'7',
            customerName:'karim',
            services:'0',
            amount:'₹0'
        },
        {
            id:'8',
            customerName:'nadeem Ali',
            services:'0',
            amount:'₹0'
        },
        {
            id:'9',
            customerName:'junaid',
            services:'0',
            amount:'₹0'
        },
        {
            id:'10',
            customerName:'saleem',
            services:'0',
            amount:'₹0'
        },
    ]

    const labels = ['facials', 'haircut', 'cleanup', 'colors', 'feet','hand', 'baby haircut', 'nadeem Ali', 'junaid', 'saleem'];

    const count = [230, 120, 550, 206, 950, 460, 230, 120, 550, 260]

  return (
    <div>
        <div className='cus_welcome' >
            Employees Details
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
    </div>
  );
}

export default Customer;