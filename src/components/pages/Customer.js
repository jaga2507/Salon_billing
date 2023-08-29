import React, { useEffect, useState } from "react";
import CustomerTable from "./../tables/customer_table.js";
import Buttons from "@mui/material/Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { Button } from "@mui/material";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import axios from "axios";
import Moment from "react-moment";

function Customer() {
  const [openBoxs, setOpenBoxs] = useState(false);
  const [name, setName] = useState();
  const [PhoneNo, setPhoneNo] = useState();
  const [customerData, setCustomerData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [serviceDetailData, setServiceDetailData] = useState([]);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  let filteredCustomersBySearch = []
  var todayDate = new Date();
  var dd = String(todayDate.getDate()).padStart(2, "0");
  var mm = String(todayDate.getMonth() + 1).padStart(2, "0");
  var yyyy = todayDate.getFullYear();
  todayDate = dd + "/" + mm + "/" + yyyy;

  useEffect(() => {
    setFilteredCustomers(customerData);
  }, [customerData]);

  useEffect(() => {
    HandelCustomerData();
  }, []);

  const HandelCustomerData = () => {
    axios.get(`${process.env.REACT_APP_API}/custumer/get`).then(function (res) {
      setCustomerData(res.data);
    });
  };


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filteredCustomersBySearch = customerData.filter((customer) =>
      customer.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCustomers(filteredCustomersBySearch)
  };


  const filterDataByDateRange = () => {
    const filteredData = customerData.filter((item) => {
      const createdAt = new Date(item.createdAt);
      if (
        selectedStartDate &&
        selectedEndDate &&
        createdAt >= selectedStartDate &&
        createdAt <= selectedEndDate
      ) {
        return true;
      }
      return false;
    });
    setFilteredCustomers(filteredData);
  };
  

  return (
    <div>
      <div className="cus_welcome">Customer Details</div>

      <div className="cus_modal">Please select the date</div>
      <div className="date_range">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DateRangePicker"]}>
            <DateRangePicker
              className="datePicker"
              localeText={{ start: '', end: '' }}
              startText="Start Date"
              endText="End Date"
              value={[selectedStartDate, selectedEndDate]}
              onChange={(newValue) => {
                setSelectedStartDate(newValue[0]);
                setSelectedEndDate(newValue[1]);
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
        <div>
          <Buttons onClick={filterDataByDateRange} variant="contained" color="warning">
            Search
          </Buttons>
        </div>
      </div>
      <div style={{ width: "100%" }} className="date_range">
        <div style={{ width: "100%" }}>
          <input
            style={{ width: "100%" }}
            type="text"
            placeholder="Search by customer name"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div>
          <Buttons variant="contained" color="warning">
            Search
          </Buttons>
        </div>
      </div>
      <div className="sale">Customer Revenue</div>
      <div className="billdetails">
        <div>
          <div className="todayBooking">
            <div>Number Of Bookings</div>
            <div>Customer</div>
            <div>Service Name</div>
            <div>Date & Time</div>
            <div>Amount</div>
          </div>
          <div className="BookingDetails">
            {filteredCustomers?.map((item, index) => {
              return (
                <div key={index}>
                  <Button
                    key={item.id}
                    value={item}
                    onClick={(e) => {
                      setOpenBoxs(true);
                      setName(item.customerName);
                      setPhoneNo(item.customerPhoneNo);
                      setServiceDetailData(item.custumerServices_id);
                    }}
                    name={item.customerName}
                    className="bookingdata"
                  >
                    <div className="noClient">{index + 1}</div>
                    <div>
                      {item.customerName}
                      <div>{item.customerPhoneNo}</div>
                    </div>
                    <div>{item?.custumerServices_id[0]?.serviceName}</div>
                    <div className="bookingdate">
                      <span>
                        <Moment format="DD/MM/YYYY">{item.createdAt}</Moment>
                      </span>
                      <span>
                        <Moment format="hh:mm A">{item.createdAt}</Moment>
                      </span>
                    </div>
                    <div>₹{item.custumerAmount}</div>
                  </Button>
                </div>
              );
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
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
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
                    <div
                      key={index}
                      className="BookingDetails"
                      style={{ overflowX: "auto" }}
                    >
                      <div className="bookingdata">
                        <div className="noClient">{index + 1}</div>

                        <div>{el?.serviceName}</div>
                        <div className="bookingdate">
                          <span>
                            <Moment format="DD/MM/YYYY">{el?.createdAt}</Moment>
                          </span>
                          <span>
                            <Moment format="hh:mm A">{el?.createdAt}</Moment>
                          </span>
                        </div>
                        <div>{el?.servicePrice}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Sheet>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Customer;
