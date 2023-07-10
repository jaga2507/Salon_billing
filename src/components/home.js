import './Dashboard_style.css'
import Chart from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import { DataGrid } from '@mui/x-data-grid';
import Pie_chart from './charts/pie_chart';
import Bar_chart from './charts/line_chart';
import Customer_table from './tables/customer_table';
import Radar from './charts/radar_chart';
import Menu from './pages/menu';
import Billing from './billing/Bill_menu'
import TodayBooking from './tables/Today_Bookings'


function Home() {

  const dataset = [{
      names:"today sale",
      count:["₹","11568"]
    },
    {
      names:"Monthly Sale",
      count:["₹","1,56,871"]
    },
    {
      names:"Today walkin's",
      count:"63"
    },
    {
      names:"This month walkin",
      count:"859"
    },
  ]


  return (
    <div className='home' >
      <div className='home_dashboard' >
        <div className='sale_list' >
            {dataset.map(item =>
            <div className='sale_card'>
              <div className='today_sale'>
                {item.names}
              </div>
              <div className='money'>
                {item.count}
              </div>
            </div>
            )}
        </div>
            <div className='sale' >
            Employee-wise Revenue
            </div>
        <div className='chart'>
          <div className='bar' >
            monthly sale chart1
            <Bar_chart/>
          </div>
        </div>
        <div className='cusChart' >
          <div className='cusRadar'>
            <div className='sale' >
            Payment Method Comparison - ₹49,368.00
            </div>
            <div className='bar' >
              monthly sale chart1
              <Pie_chart/>
            </div>
          </div>
          <div className='cusRadar'>
            <div className='sale' >
             sales - ₹49,368.00
            </div>
            <div className='bar' >
              monthly sale chart1
              <Radar/>
            </div>
          </div>
        </div>
            <div className='sale' >
             Today Bookings
            </div>
          <div className='data_table' >
            <div> 
              <TodayBooking/>
            </div>
          </div>
        <div className='bill' >
          <Billing/>
        </div>
      </div>
    </div>
  );
}

export default Home;
