import React, { useState, useEffect } from 'react';
import Bars_chart from '../charts/Bars_chart';
import Buttons from '@mui/material/Button';
import axios from 'axios';

function Customer() {

    const [EmployeData, setEmployeData] = useState([])
    const grapLabel = EmployeData.map(item => item.staffName);
    const grapPrize = EmployeData.map(item => item.totalAmount);


    useEffect(() => {
        HandelEmployeData();
    }, []);

    const HandelEmployeData = () => {
        axios
        .get(`${process.env.REACT_APP_API}/custumer/staff-detail`)
        .then(function (res) {
            setEmployeData(res.data);
        });
    };

    return (
        <div>
            <div className='cus_welcome' >
                Employee Details
            </div>
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
                    <Bars_chart labels={grapLabel} count={grapPrize} />
                </div>
            </div>
            <div className='employee' >
                <div className='todayBooking' >
                    <div style={{ paddingLeft: "60px" }} >
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
                    {EmployeData?.map((item, index) => {

                        return (
                            <div key={index} >
                                <div
                                    className="empDetails"
                                >
                                    <div className="noClient" >
                                        {index + 1}
                                    </div>
                                    <div>
                                        {item.staffName}
                                    </div>
                                    <div>
                                        {item.numCustomers}
                                    </div>
                                    <div className="empAmount" >
                                        ₹{item.totalAmount}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Customer;