import React, { useState, useEffect } from "react";
import Bars_chart from "../charts/Bars_chart";
import axios from "axios";

function Customer() {
    const [serviceData, setServiceData] = useState([]);
    const [serviceCount, setServiceCount] = useState([]);
    const grapLabel = serviceCount.map((item) => item?.serviceName);
    const grapPrize = serviceCount.map((item) => item?.serviceCount);

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

    return (
        <div>
            <div className="cus_welcome">Employees Details</div>
            <div className="date_range">
                <div>
                    <input placeholder="Search" type="date" />
                </div>
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
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Customer;
