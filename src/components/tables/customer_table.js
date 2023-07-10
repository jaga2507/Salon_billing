import * as React from 'react';
import { Button } from "@mui/material";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function TodayBooking(props) {
    const [openBoxs, setOpenBoxs] = React.useState(false);
    const [storeMap1, setStoreMap1] = React.useState();
    const [storeMap2, setStoreMap2] = React.useState();
    const [storeMap3, setStoreMap3] = React.useState();
    const [storeMap4, setStoreMap4] = React.useState();
    const [storeMap5, setStoreMap5] = React.useState();
    const [storeMap6, setStoreMap6] = React.useState();
    // let pass = new Map();
    // console.log('cus',storeMap)
    // console.log('pass',pass)

    const data = [
        {
            id:'1',
            customerName:'lokesh',
            customerNumber:'6382102204',
            services:'Hair Service',
            date:'23-04-2023',
            time:'09:34AM',
            amount:'₹225'
        },
        {
            id:'2',
            customerName:'Karan Kumar',
            customerNumber:'9685743216',
            services:'Facial Service',
            date:'23-04-2023',
            time:'09:34AM',
            amount:'₹3,000'
        },
        {
            id:'3',
            customerName:'Arun kumar',
            customerNumber:'6452135995',
            services:'Hair Service',
            date:'23-04-2023',
            time:'09:34AM',
            amount:'₹200'
        },
        {
            id:'4',
            customerName:'sathish',
            services:'Hand & Feet Service',
            customerNumber:'9632587412',
            date:'23-04-2023',
            time:'09:34AM',
            amount:'₹500'
        },
        {
            id:'5',
            customerName:'kiran',
            customerNumber:'9764318523',
            services:'Hair Service',
            date:'23-04-2023',
            time:'09:34AM',
            amount:'₹450'
        },
        {
            id:'6',
            customerName:'lokesh',
            customerNumber:'9173826450',
            services:'Combo Service',
            date:'23-04-2023',
            time:'09:34AM',
            amount:'₹1,499'
        },
    ]

    return(
        <div>
            <div className="todayBooking" >
                <div>
                    Number Of Bookings
                </div>
                <div>
                    Customer
                </div>
                <div>
                    Service Name
                </div>
                <div>
                    Date & Time
                </div>
                <div>
                    Amount
                </div>
            </div>
            <div className="BookingDetails" >
                {data.map((item)=>(
                    <div key={item.id} >
                        <Button 
                            key={item.id}  
                            value={item} 
                            onClick={(e) => {
                                setOpenBoxs(true);
                                setStoreMap1(item.customerName)
                                setStoreMap2(item.customerNumber)
                                setStoreMap3(item.services)
                                setStoreMap4(item.date)
                                setStoreMap5(item.time)
                                setStoreMap6(item.amount)
                            }} 
                            name={item.customerName} 
                            className="bookingdata" 
                        >
                            <div className="noClient" >
                                {item.id}
                            </div>
                            <div>
                                {item.customerName}
                                <div>
                                    {item.customerNumber}
                                </div>
                            </div>
                            <div>
                                {item.services}
                            </div>
                            <div className="bookingdate" >
                                <span>                          
                                    {item.date}
                                </span> 
                                <span>
                                    {item.time}
                                </span>
                            </div>
                            <div className="bookingAmount" >
                                {item.amount}
                            </div>
                        </Button>
                    </div>
                ))}
            </div>
            <Modal
                aria-labelledby="close-modal-title"
                open={openBoxs}
                onClose={(_event, reason) => {
                    alert(`Reason: ${reason}`);
                    setOpenBoxs(false)
                }}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Sheet
                variant="outlined"
                    sx={{
                        width: 700,
                        borderRadius: 'md',
                        p: 3,
                        height:500,
                        background:"white",
                    }}
                >
                    <ModalClose variant="outlined" />
                    <div>
                        <div className='cus_welcome' >
                            {/* <ArrowBackIosNewIcon/> */}
                            Welcome to Bill Details
                        </div>
                        <div>
                        <div className="cus_modal" >
                            Please check your Bill
                        </div>
                        <div className='day_bill' >
                            <div className='day_bills'>
                                <div key={storeMap1} className='cus_number'>
                                    Customer Name : {storeMap1}
                                </div>
                                <div key={storeMap2} className='cus_number'>
                                    Customer Number : {storeMap2}
                                </div>
                                <div key={storeMap3} className='cus_number'>
                                    Service : {storeMap3}
                                </div>
                                <div key={storeMap4} className='cus_number'>
                                    date : {storeMap4}
                                </div>
                                <div key={storeMap5} className='cus_number'>
                                    time : {storeMap5}
                                </div>
                                <div key={storeMap1} className='cus_number'>
                                    amount : {storeMap6}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </Sheet>
            </Modal>
        </div>
    )
}

export default TodayBooking;