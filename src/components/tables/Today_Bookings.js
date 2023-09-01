import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import axios from "axios";
import Moment from "react-moment";

function TodayBooking(props) {
    const [openBoxs, setOpenBoxs] = useState(false);
    const [name, setName] = useState();
    const [PhoneNo, setPhoneNo] = useState();
    const [billId, setBillId] = useState();
    const [servicePrice, setServicePrice] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [serviceType, setServiceType] = useState();
    const [storeMap3, setStoreMap3] = useState();
    const [storeMap4, setStoreMap4] = useState();
    const [storeMap5, setStoreMap5] = useState();
    const [storeMap6, setStoreMap6] = useState();
    const [customerData, setCustomerData] = useState([]);
    const [serviceDetailData, setServiceDetailData] = useState([]);
    let totalServicePrice = 0;

    console.log("serviceDetailData", serviceDetailData);

    let Srno = 0;
    var todayDate = new Date();
    var dd = String(todayDate.getDate()).padStart(2, "0");
    var mm = String(todayDate.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = todayDate.getFullYear();
    todayDate = dd + "/" + mm + "/" + yyyy;

    useEffect(() => {
        HandelCustomerData();
    }, []);

    const HandelCustomerData = () => {
        axios.get(`${process.env.REACT_APP_API}/custumer/get`).then(function (res) {
            setCustomerData(res.data);
        });
    };


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
                {customerData?.map((item, index) => {
                    const formattedDate = new Date(item.createdAt).toLocaleDateString(
                        "en-GB",
                        {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        }
                    );
                    if (item.servicePrice) {
                        totalServicePrice += parseFloat(item.servicePrice);
                    }
                    if (todayDate == formattedDate) {
                        Srno += 1;
                        return (
                            <div key={index}>
                                <Button
                                    key={item.id}
                                    value={item}
                                    onClick={() => {
                                        setOpenBoxs(true);
                                        setName(item.customerName);
                                        setPhoneNo(item.customerPhoneNo);
                                        setBillId(item._id);
                                        setServiceType(item.serviceType);
                                        setDate(item.createdAt);
                                        setTime(item.createdAt);
                                        setServicePrice(item.servicePrice);
                                        setServiceDetailData(

                                            item.custumerServices_id,
                                        );
                                    }}
                                    name={item.customerName}
                                    className="bookingdata"
                                >
                                    <div className="noClient"> {Srno}</div>
                                    <div>
                                        {item.customerName}
                                        <div>{item.customerPhoneNo}</div>
                                    </div>
                                    <div>{item?.custumerServices_id[0]?.serviceName}</div>
                                    <div className="bookingdate">
                                        <span>
                                            <Moment format="DD/MM/YYYY">{item?.createdAt}</Moment>
                                        </span>
                                        <span>
                                            <Moment format="hh:mm A">{item?.createdAt}</Moment>
                                        </span>
                                    </div>
                                    <div>₹{item?.custumerAmount}</div>
                                </Button>
                            </div>
                        );
                    }
                })}
            </div>

            <Modal
                aria-labelledby="close-modal-title"
                open={openBoxs}
                onClose={() => {
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
                        height: 650,
                        background: "white",
                    }}
                >
                    <ModalClose variant="outlined" />

                    <div >
                        <div className="booking_title" >
                            <div>
                                <div className="trypography-value">{name} </div>
                                <div className="trypography-key">{PhoneNo} </div>
                            </div>
                            <div className='sale'>
                                Customer History
                            </div>
                        </div>
                        <hr></hr>
                        <div className="booking-time" >
                            <div>
                                <div>BOOKING #</div>
                                <div>{billId}</div>
                            </div>
                            <div>
                                <div>BOOKING TIME</div>
                                <div>
                                    <span style={{ marginRight: "10px" }} >
                                        <Moment format="DD/MM/YYYY">
                                            {date}
                                        </Moment>
                                    </span>
                                    <span>-</span>
                                    <span style={{ marginLeft: "10px" }} >
                                        <Moment format="hh:mm A">
                                            {time}
                                        </Moment>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <div className="booking-title" style={{ fontWeight: "500" }}>
                                <div>SERVICE NAME</div>
                                <div>STAFF</div>
                            </div>
                            <div className="booking-details" >
                                {serviceDetailData?.map((el, index) => {
                                    if (el?.servicePrice) {
                                        totalServicePrice += parseFloat(el.servicePrice);
                                    }
                                    return (
                                        <div >

                                            <div className="booking-service" >
                                                <div><div>{el?.serviceType} ({el?.serviceName})</div><div>{el?.servicePrice}</div></div>
                                                <div>{el?.staff_id.staffName}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="booking-value" style={{ fontWeight: "700", marginTop: "10px" }}>
                                <div>SERVICE TOTAL</div>
                                <div>{totalServicePrice}</div>
                            </div>
                            <div className="booking-value" >
                                <div>TAX TOTAL</div>
                                <div>{"0"}</div>
                            </div>
                            <hr></hr>
                            <div className="booking-value" style={{ marginTop: "30px" }}  >
                                <div>AMOUNT</div>
                                <div>{totalServicePrice}</div>
                            </div>
                            <div className="booking-value" style={{ fontSize: "14px" }}>
                                <div>paid via cash</div>
                                <div>{totalServicePrice}</div>
                            </div>
                            <div className="booking-value" style={{ fontSize: "14px" }}>
                                <div>paid via paytm</div>
                                <div>{"0"}</div>
                            </div>
                            <div className="booking-value" style={{ fontSize: "14px" }}>
                                <div>paid via card</div>
                                <div >{"0"}</div>
                            </div>
                            <div className="booking-value" style={{ fontWeight: "700", marginTop: "10px" }}>
                                <div>TOTAL PAID</div>
                                <div>{totalServicePrice}</div>
                            </div>
                        </div>
                    </div>
                </Sheet>
            </Modal>
        </div>
    );
}

export default TodayBooking;

