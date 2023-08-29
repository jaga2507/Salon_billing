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
    const [storeMap3, setStoreMap3] = useState();
    const [storeMap4, setStoreMap4] = useState();
    const [storeMap5, setStoreMap5] = useState();
    const [storeMap6, setStoreMap6] = useState();
    const [customerData, setCustomerData] = useState([]);
    const [serviceDetailData, setServiceDetailData] = useState([]);

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
                        width: 700,
                        borderRadius: "md",
                        p: 3,
                        height: 500,
                        background: "white",
                    }}
                >
                    <ModalClose variant="outlined" />
                    <div>
                        <div className="cus_welcome">Welcome to Bill Details</div>

                        <div>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="cus_number" style={{ display: "flex" }}>
                                    <p className="trypography-key">Customer Name : </p>
                                    <p className="trypography-value">{name} </p>
                                </div>

                                <div className="cus_number" style={{ display: "flex" }}>
                                    <p className="trypography-key">Customer Number : </p>
                                    <p className="trypography-value">{PhoneNo} </p>
                                </div>
                            </div>
                        </div>

                        <div className="sale" style={{ marginBottom: "20px" }}>
                            Services
                        </div>
                        <div className="todayBooking">
                            <div>Service No</div>
                            <div>Service Name</div>
                            <div>Date & Time</div>
                            <div>Amount</div>
                        </div>

                        {serviceDetailData?.map((el, index) => {
                            return (
                                <div key={index} className="BookingDetails">
                                    <div>
                                        <div className="bookingdata">
                                            <div className="noClient">{index + 1}</div>

                                            <div>{el?.serviceName}</div>
                                            <div className="bookingdate">
                                                <span>
                                                    <Moment format="DD/MM/YYYY">
                                                        {el?.createdAt}
                                                    </Moment>
                                                </span>
                                                <span>
                                                    <Moment format="hh:mm A">
                                                        {el?.createdAt}
                                                    </Moment>
                                                </span>
                                            </div>
                                            <div>{el?.servicePrice}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Sheet>
            </Modal>
        </div>
    );
}

export default TodayBooking;
