import * as React from "react";
import { Button } from "@mui/material";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function TodayBooking(props) {
    const [openBoxs, setOpenBoxs] = React.useState(false);
    const [storeMap1, setStoreMap1] = React.useState();
    const [storeMap2, setStoreMap2] = React.useState();
    const [storeMap3, setStoreMap3] = React.useState();
    const [storeMap4, setStoreMap4] = React.useState();
    const [storeMap5, setStoreMap5] = React.useState();
    const [storeMap6, setStoreMap6] = React.useState();
    const [storeMap7, setStoreMap7] = React.useState();
    const [storeMap8, setStoreMap8] = React.useState();
    // let pass = new Map();
    // console.log('cus',storeMap)
    // console.log('pass',pass)

    const data = [
        {
            id: "1",
            customerName: "lokesh",
            customerNumber: "6382102204",
            services: "Hair Service",
            servicesName: "taper haircut, shave",
            date: "23-04-2023",
            time: "09:34AM",
            amount: "₹225",
            staffName: "malik"
        },
        {
            id: "2",
            customerName: "Karan Kumar",
            customerNumber: "9685743216",
            services: "Facial Service",
            servicesName: "skin whitting",
            date: "23-04-2023",
            time: "09:34AM",
            amount: "₹3,000",
            staffName: "malik"
        },
        {
            id: "3",
            customerName: "Arun kumar",
            customerNumber: "6452135995",
            services: "Hair Service",
            servicesName: "new look",
            date: "23-04-2023",
            time: "09:34AM",
            amount: "₹200",
            staffName: "malik"
        },
        {
            id: "4",
            customerName: "sathish",
            services: "Hand & Feet Service",
            servicesName: "classic pedicure, classic manicure",
            customerNumber: "9632587412",
            date: "23-04-2023",
            time: "09:34AM",
            amount: "₹500",
            staffName: "malik"
        },
        {
            id: "5",
            customerName: "kiran",
            customerNumber: "9764318523",
            services: "Hair Service",
            servicesName: "neat haircut",
            date: "23-04-2023",
            time: "09:34AM",
            amount: "₹125",
            staffName: "malik"
        },
        {
            id: "6",
            customerName: "lokesh",
            customerNumber: "9173826450",
            services: "Combo Service",
            servicesName: "10 combo, any haircut, beard trim, hair spa, oxy facial",
            date: "23-04-2023",
            time: "09:34AM",
            amount: "₹1,499",
            staffName: "malik"
        },
    ];

    return (
        <div>
            <div className="todayBooking">
                <div>Number Of Bookings</div>
                <div>Customer</div>
                <div>Service Name</div>
                <div>Date & Time</div>
                <div>Amount</div>
            </div>
            <div className="BookingDetails">
                {data.map((item) => (
                    <div key={item.id}>
                        <Button
                            key={item.id}
                            value={item}
                            onClick={(e) => {
                                setOpenBoxs(true);
                                setStoreMap1(item.customerName);
                                setStoreMap2(item.customerNumber);
                                setStoreMap3(item.services);
                                setStoreMap4(item.date);
                                setStoreMap5(item.time);
                                setStoreMap6(item.amount);
                                setStoreMap7(item.staffName);
                                setStoreMap8(item.servicesName);
                            }}
                            name={item.customerName}
                            className="bookingdata"
                        >
                            <div className="noClient">{item.id}</div>
                            <div>
                                {item.customerName}
                                <div>{item.customerNumber}</div>
                            </div>
                            <div>{item.services}</div>
                            <div className="bookingdate">
                                <span>{item.date}</span>
                                <span>{item.time}</span>
                            </div>
                            <div >{item.amount}</div>
                        </Button>
                    </div>
                ))}
            </div>
            <Modal
                aria-labelledby="close-modal-title"
                open={openBoxs}
                onClose={(_event, reason) => {
                    alert(`Reason: ${reason}`);
                    setOpenBoxs(false);
                }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        width: 750,
                        borderRadius: "md",
                        p: 3,
                        height: 630,
                        background: "white",
                    }}
                >
                    <ModalClose variant="outlined" />
                    {/* <div>
                        <div className="cus_welcome">
                            <ArrowBackIosNewIcon/>
                            Welcome to Bill Details
                        </div>
                        <div>
                            <div className="cus_modal">Please check your Bill</div>
                            <div className="day_bill">
                                <div className="day_bills">
                                    <div key={storeMap1} className="cus_number">
                                        Customer Name : {storeMap1}
                                    </div>
                                    <div key={storeMap2} className="cus_number">
                                        Customer Number : {storeMap2}
                                    </div>
                                    <div key={storeMap3} className="cus_number">
                                        Service : {storeMap3}
                                    </div>
                                    <div key={storeMap4} className="cus_number">
                                        date : {storeMap4}
                                    </div>
                                    <div key={storeMap5} className="cus_number">
                                        time : {storeMap5}
                                    </div>
                                    <div key={storeMap1} className="cus_number">
                                        amount : {storeMap6}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div >
                        <div className="booking_title" >
                            <div>
                                <div className="trypography-value">{storeMap1} </div>
                                <div className="trypography-key">{storeMap2} </div>
                            </div>
                            <div className='sale'>
                                Customer History
                            </div>
                        </div>
                        <hr></hr>
                        <div className="booking-time" >
                            <div>
                                <div>BOOKING #</div>
                                <div>5241-240562-521</div>
                            </div>
                            <div>
                                <div>BOOKING TIME</div>
                                <div>{storeMap5} on {storeMap4}</div>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <div className="booking-title" style={{ fontWeight: "500" }}>
                                <div>SERVICE NAME</div>
                                <div>STAFF</div>
                            </div>
                            <div className="booking-details" >
                                <div className="booking-service" >
                                    <div><div>{storeMap3} ({storeMap8})</div><div> {storeMap6}</div></div>
                                    <div>{storeMap7}</div>
                                </div>
                            </div>
                            <div className="booking-value" style={{ fontWeight: "700", marginTop: "10px" }}>
                                <div>SERVICE TOTAL</div>
                                <div>{"4125"}</div>
                            </div>
                            <div className="booking-value" >
                                <div>TAX TOTAL</div>
                                <div>{"0"}</div>
                            </div>
                            <hr></hr>
                            <div className="booking-value" style={{ marginTop: "30px" }}  >
                                <div>AMOUNT</div>
                                <div>{"4125"}</div>
                            </div>
                            <div className="booking-value" style={{ fontSize: "14px" }}>
                                <div>paid via cash</div>
                                <div>{"2000"}</div>
                            </div>
                            <div className="booking-value" style={{ fontSize: "14px" }}>
                                <div>paid via paytm</div>
                                <div>{"2000"}</div>
                            </div>
                            <div className="booking-value" style={{ fontSize: "14px" }}>
                                <div>paid via card</div>
                                <div >{"125"}</div>
                            </div>
                            <div className="booking-value" style={{ fontWeight: "700", marginTop: "10px" }}>
                                <div>TOTAL PAID</div>
                                <div>{"4125"}</div>
                            </div>
                        </div>
                    </div>
                </Sheet>
            </Modal>
        </div>
    );
}

export default TodayBooking;