import React, { useState, useEffect } from "react";
import Bars_chart from "../charts/Bars_chart";
import axios from "axios";
import Buttons from "@mui/material/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import ClearIcon from '@mui/icons-material/Clear';
import Sheet from "@mui/joy/Sheet";


function Customer() {
    const [serviceData, setServiceData] = useState([]);
    const [openBoxs, setOpenBoxs] = useState(false);
    const [serviceCount, setServiceCount] = useState([]);
    const [filterData, setFilterData] = useState([])
    const grapLabel = filterData.map((item) => item?.serviceName);
    const grapPrize = filterData.map((item) => item?.serviceCount);

    useEffect(() => {
        setFilterData(serviceCount);
    }, [serviceCount]);


    useEffect(() => {
        HandelEmployeData();
        HandelServiceCount();
    }, []);

    const HandelEmployeData = () => {
        axios.get(`${process.env.REACT_APP_API}/serivce/get`).then(function (res) {
            setServiceData(res.data);
        });
    };

    const HandelServiceCount = () => {
        axios
            .get(`${process.env.REACT_APP_API}/custumer/service-count`)
            .then(function (res) {
                setServiceCount(res.data);
            });
    };

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        const filteredData = serviceCount.filter((item) => {
            return item.serviceCreatedAt?.split('T')[0] === selectedDate;
        });
        setFilterData(filteredData);
    };


    return (
        <div>
            <div className="cus_welcome">Employees Details</div>
            <div className="date_range">
                <div style={{ display: "flex" }}>
                    <input
                        placeholder="Search"
                        type="date"
                        onChange={handleDateChange}
                    />

                    <Buttons
                        onClick={() => {
                            setFilterData(serviceCount)
                        }}
                        style={{
                            marginLeft: "10px",
                            height: "36px",
                            marginTop: "3px",
                            backgroundColor: "#004f87"

                        }}
                        variant="contained">
                        Reset
                    </Buttons>
                    <Buttons
                        onClick={() => { setOpenBoxs(true); }}
                        style={{
                            marginLeft: "10px",
                            height: "36px",
                            marginTop: "3px",
                            backgroundColor: "#004f87"

                        }}
                        variant="contained"
                    >
                        Add Service
                    </Buttons>
                </div>
            </div>
            <div>

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
                        <div className="add_service" >
                            <div className="sale" >
                                Add Service
                            </div>
                            <br></br>
                            <div className="add_service_cot" >
                                <div>
                                    Service type
                                </div>
                                <div>
                                    <input placeholder="Enter the service type" />
                                </div>
                            </div>
                            <br></br>
                            <div className="add_service_cot" >
                                <div>
                                    serivce name
                                </div>
                                <div>
                                    <input placeholder="Enter the service name" />
                                </div>
                            </div>
                            <br></br>
                            <div className="add_service_cot" >
                                <div>
                                    serivce price
                                </div>
                                <div>
                                    <input placeholder="Enter the service price" />
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }} >
                                <Buttons
                                    onClick={() => { setOpenBoxs(true); }}
                                    style={{
                                        marginLeft: "10px",
                                        height: "36px",
                                        marginTop: "15px",
                                        display: "flex",
                                        justifyContent: "center",
                                        backgroundColor: "#004f87"
                                    }}
                                    variant="contained"
                                >
                                    Add Service
                                </Buttons>
                            </div>
                        </div>

                    </Sheet>
                </Modal>
            </div>
            <div className="cusRadar">
                <div className="sale">Employee-wise Revenue</div>
                <div className="billdetails">
                    <Bars_chart labels={grapLabel} count={grapPrize} />
                </div>

                <div className="employee">
                    <div className="todayBooking">
                        <div style={{ paddingLeft: "60px" }}>#</div>
                        <div>Service Type</div>
                        <div>Service Name</div>
                        <div>Service Price</div>
                        <div style={{ display: "flex", justifyContent: "flex-end" }} >
                            Action
                        </div>
                    </div>
                    <div className="BookingDetails">
                        {serviceData?.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="empDetails">
                                        <div className="noClient">{index + 1}</div>
                                        <div>{item.serviceType}</div>
                                        <div>{item.serviceName}</div>
                                        <div className="empAmount">₹{item.servicePrice}</div>
                                        <div style={{ display: "flex", justifyContent: "flex-end" }} >
                                            <ClearIcon style={{ cursor: "pointer" }} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Customer;
