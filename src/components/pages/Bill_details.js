import * as React from 'react';
import CustomerTable from './../tables/Today_Bookings'
import { DataGrid } from '@mui/x-data-grid';
import Bar_chart from '../charts/line_chart';
import Pie from '../charts/pie_chart';
import Radar from '../charts/radar_chart';
import './pages.css'

function Bill_Details() {


  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <div>
      <div className='cus_welcome' >
        Welcome to Bill Details
      </div>
      <div className="cus_modal" >
        Please select the date
      </div>
      <div className='date_range' >
        <div>
          <input type='date' />
        </div>
        <div>
          <input type='date' />
        </div>
      </div>
      <div className='cusbooking' >
        <div className='cus-booking' >
          <div >
            <div className='custm' >
              customer
            </div>
            <div className='count' >
              1799
            </div>
          </div>
          <div>
            <div className='custm' >
              new customer
            </div>
            <div className='count' >
              799
            </div>
          </div>
          <div>
            <div className='custm' >
              Existing customer
            </div>
            <div className='count' >
              1000
            </div>
          </div>
        </div>
        <div className='cus-booking' >
          <div>
            <div className='custm' >
              new customer
            </div>
            <div className='count' >
              799
            </div>
          </div>
        </div>
        <div className='cus-booking' >
          <div>
            <div className='custm' >
              new customer
            </div>
            <div className='count' >
              799
            </div>
          </div>
        </div>
      </div>
      <div className='sale' >
        Sales - ₹45,398.00/- (With GST)
      </div>
      {/* <div className='billdetails' > */}
      {/* <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 6 },
                },
              }}
              pageSizeOptions={[6, 10]}
              checkboxSelection
            />
          </div> */}
      <div className='bar' >
        monthly sale chart1
        <Bar_chart />
      </div>

      {/* </div> */}
      <div className='cusChart' >
        <div className='cusRadar'>
          <div className='sale' >
            Payment Method Comparison - ₹49,368.00
          </div>
          <div className='bar' >
            monthly sale chart1
            <Pie />
          </div>
        </div>
        <div className='cusRadar'>
          <div className='sale' >
            sales - ₹49,368.00
          </div>
          <div className='bar' >
            monthly sale chart1
            <Radar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bill_Details;