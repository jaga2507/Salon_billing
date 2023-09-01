import React, { useState, useEffect } from "react";
import Input from "@mui/joy/Input";
import { toast, ToastContainer } from "react-toastify";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, TextField, Button, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import axios from "axios";

function Bill_mode(props) {
  const [openBoxs, setOpenBoxs] = useState(true);
  const [serviceType, setserviceType] = useState("");
  const [serviceData, setServiceData] = useState([]);
  const [staffData, setStaffData] = useState([]);
  const [billingServiceData, setBillingServiceData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0)
  const [customerServiceId, setCustomerServiceId] = useState([])
  let totalServicePrice = 0;
  let percentage = 18;
  let calculatedAmount = 0


  const [age, setAge] = React.useState('');

  const handlePaymentChange = (event) => {
    setAge(event.target.value);
  };



  useEffect(() => {
    getServiceData();
    getStaffData();
  }, []);

  const getServiceData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/serivce/get`)
      .then(function (res) {
        setServiceData(res.data);
        console.log("res.data", res.data)
      });
  };

  const getStaffData = () => {
    axios.get(`${process.env.REACT_APP_API}/staff/get`).then(function (res) {
      setStaffData(res.data);
      console.log("res.data", res.data)

    });
  };



  const data = [
    {
      names: "hairs",
    },
    {
      names: "facial service",
    },
    {
      names: "hand & feet service",
    },
    {
      names: "product service",
    },
    {
      names: "hairs",
    },
  ];


  const customerData = {
    customerName: props.cusName,
    customerPhoneNo: props.cusNum,
    custumerAmount: totalAmount,
    billingServiceData: billingServiceData
  }

  const HandelCustomerData = (event) => {
    if (customerServiceId?.length > 0) {
      axios
        .post(`${process.env.REACT_APP_API}/custumer/add`, customerData)
        .then(function (res) {
          if (res.data) {
            setTimeout(function () {
              props.setdata(false);
            }, 2000);

            toast.success("Added successfully", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        });
    }
    else {
      toast.warn("Please add Services", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };



  const handleChange = (event, index) => {
    setBillingServiceData((prevState) => {
      prevState[index]['staff_id'] = event.target.value;
      return [...prevState];
    })
  };

  const HandelCustomerServiceData = (item) => {

    setBillingServiceData((preState) => {
      return [
        ...preState,
        {
          _id: item?._id,
          serviceName: item?.serviceName,
          servicePrice: item?.servicePrice,
          serviceType: item?.serviceType,
          staff_id: 0
        },
      ];
    });
  }



  const deleted = (index) => {
    setBillingServiceData((prevState) => {
      const newState = prevState.filter(serviceItem => serviceItem._id != index);
      return [...newState];
    })

    setCustomerServiceId((prevState) => {
      const newState = prevState.filter(serviceItem => serviceItem != index);
      return [...newState];
    })

  }

  return (
    <div>
      <Modal
        aria-labelledby="close-modal-title"
        open={props.data}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: 1000,
            borderRadius: "md",
            p: 3,
            height: 550,
            background: "white",
          }}
        >
          <ModalClose variant="outlined" onClick={() => {
            props.setdata(false);
            setBillingServiceData([])
          }} />
          <div className="inside_modal">
            <div className="bill_flex">
              <div>
                <div style={{ display: "flex", justifyContent: "space-between" }} >
                  <div>
                    <div className="cus_name">
                      <span>{props.cusName}</span>
                    </div>
                    <div className="cus_num">
                      <LocalPhoneIcon />
                      <span>{props.cusNum}</span>
                    </div>
                  </div>
                  <div className=" sale">Select The Service</div>
                </div>
                <div>
                  <div>
                    {openBoxs ? (
                      <>
                        <div style={{ display: "flex" }}>
                          <ArrowBackIosNewIcon
                            style={{ marginTop: "30px", cursor: "pointer" }}
                            onClick={() => {
                              setOpenBoxs(true);
                            }}
                          />
                          <div className=" sale">Select The Service Type</div>
                        </div>
                        <div className="bill_sheet">
                          {data.map((item) => (
                            <div
                              onClick={() => {
                                setserviceType(item.names);
                                setOpenBoxs(false);
                              }}
                              className="Bill_card"
                            >
                              <div className="service_name">{item.names}</div>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <div style={{ display: "flex" }}>
                          <ArrowBackIosNewIcon
                            style={{ marginTop: "30px", cursor: "pointer" }}
                            onClick={() => {
                              setOpenBoxs(true);
                            }}
                          />
                          <div className=" sale">Select The Service</div>
                        </div>
                        <div>
                          <div>
                            <div className="bill_sheet">
                              {serviceData.map((item) => {
                                if (item.serviceType == serviceType) {
                                  return (
                                    <div
                                      className="Bill_card"
                                      onClick={() => {
                                        setCustomerServiceId(preState => [...preState, item._id]);
                                        HandelCustomerServiceData(item)

                                      }}
                                    >
                                      <div className="service_name">
                                        {item?.serviceName}
                                      </div>
                                      <div className="service_name">
                                        {item.servicePrice}
                                      </div>
                                    </div>
                                  );
                                }
                              })}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bills">
              <div className="cus_welcome">Make a bill</div>
              <div className="bill_det">
                {
                  billingServiceData?.map((item, index) => {
                    if (item?.servicePrice) {
                      totalServicePrice += parseFloat(item.servicePrice);
                      calculatedAmount = ((totalServicePrice * percentage) / 100) + totalServicePrice;
                    }
                    return (
                      <div className="amt_staff">
                        <div className="make_service">{item?.serviceName}</div>
                        <div className="make_service">{item?.servicePrice}</div>
                        <div className="make_service">
                          <FormControl
                            sx={{ m: 1, minWidth: 120 }}
                            size="small"
                          >
                            <InputLabel id="demo-select-small-label">
                              staff
                            </InputLabel>
                            <Select
                              key={item?._id}
                              labelId="demo-select-small-label"
                              label="staff"
                              onChange={(e) => {
                                handleChange(e, index)
                              }}
                            >
                              <MenuItem value={0}>
                                <em>None</em>
                              </MenuItem>
                              {staffData.map(p => (
                                <MenuItem value={p._id}>
                                  {p.staffName}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>

                        <CloseOutlinedIcon
                          style={{ marginTop: "15px", cursor: "pointer" }}
                          onClick={() => {
                            deleted(item?._id)
                          }}
                        />
                      </div>
                    );
                  })}
              </div>
              <div className="tax_tag">
                <div></div>
                <div className="make_bill tax">
                  <div>with tax</div>
                  <div>
                    RS {calculatedAmount.toFixed(2)}
                  </div>
                </div>
                <div className="make_bill tax">
                  <div>without tax</div>
                  <div> RS {totalServicePrice}</div>
                </div>
              </div>


              <div className="make_bill">
                <div className="total_amount">RS {totalServicePrice}</div>
                <div className="amount_input">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": {
                        m: 1,
                        width: "10ch",
                        height: "60px",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      className="TextField"
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </Box>
                </div>
              </div>
              <div>
                <Button variant="contained" onClick={HandelCustomerData} >Partial Payment</Button>
              </div>

            </div>
          </div>
          <ToastContainer />
        </Sheet>
      </Modal>

    </div>
  );
}

export default Bill_mode;
