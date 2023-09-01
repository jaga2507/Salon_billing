import React, { useState, useEffect } from 'react';
import Bars_chart from '../charts/Bars_chart';
import Buttons from '@mui/material/Button';
import axios from 'axios';
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import ClearIcon from '@mui/icons-material/Clear';

function Customer() {

    const [openBoxs, setOpenBoxs] = useState(false);
    const [EmployeData, setEmployeData] = useState([])
    const [filterData, setFilterData] = useState([])
    const grapLabel = filterData.map(item => item.staffName);
    const grapPrize = filterData.map(item => item.totalAmount);


    console.log("EmployeData", EmployeData)

    useEffect(() => {
        setFilterData(EmployeData);
    }, [EmployeData]);


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

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        const filteredData = EmployeData.filter((item) => {
            return item.serviceCreatedAt?.split('T')[0] === selectedDate;
        });
        setFilterData(filteredData);
    };

    return (
        <div>
            <div className='cus_welcome' >
                Employee Details
            </div>
            <div className='date_range' >
                <div>
                    <input
                        placeholder="Search"
                        type="date"
                        onChange={handleDateChange}
                    />

                    <Buttons
                        onClick={() => {
                            setFilterData(EmployeData)
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
                            height: 400,
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
                                    Staff Name
                                </div>
                                <div>
                                    <input placeholder='Enter the staff name' />
                                </div>
                            </div>
                            <br></br>
                            <div className="add_service_cot" >
                                <div>
                                    Staff role
                                </div>
                                <div>
                                    <input placeholder='Enter the staff role' />
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }} >
                                <Buttons
                                    style={{
                                        marginLeft: "10px",
                                        height: "36px",
                                        marginTop: "25px",
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
                    <div style={{ display: "flex", justifyContent: "flex-end" }} >
                        Action
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
                                    <div style={{ display: "flex", justifyContent: "flex-end" }} >
                                        <ClearIcon style={{ cursor: "pointer" }} />
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