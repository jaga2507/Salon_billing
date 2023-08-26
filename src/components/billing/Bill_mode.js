import React, { useState, useEffect } from "react";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {Box,TextField,Button,InputLabel,MenuItem,FormControl,Select} from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import axios from "axios";

function Bill_mode(props) {
  const [openBoxs, setOpenBoxs] = useState(true);
  const [serviceType, setserviceType] = useState("");
  const [serviceData, setServiceData] = useState([]);
  const [staffData, setStaffData] = useState([]);
  const [billingServiceData, setBillingServiceData] = useState([]);
  const [totalAmount , setTotalAmount ] = useState(0)


  console.log("props : " , props)

  useEffect(() => {
    getServiceData();
    getStaffData();
  }, [billingServiceData]);

  const getServiceData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/serivce/get`)
      .then(function (res) {
        setServiceData(res.data);
      });
  };

  const getStaffData = () => {
    axios.get(`${process.env.REACT_APP_API}/staff/get`).then(function (res) {
      setStaffData(res.data);
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

  const service = [
    {
      id: "1",
      names: "neat haircut",
      amount: "125",
    },
    {
      id: "2",
      names: "taper haircut",
      amount: "150",
    },
    {
      id: "3",
      names: "fade haircut",
      amount: "175",
    },
    {
      id: "4",
      names: "New Look",
      amount: "200",
    },
    {
      id: "5",
      names: "neat haircut",
      amount: "125",
    },
    {
      id: "6",
      names: "taper haircut",
      amount: "150",
    },
    {
      id: "7",
      names: "fade haircut",
      amount: "175",
    },
    {
      id: "8",
      names: "New Look",
      amount: "200",
    },
    {
      id: "9",
      names: "neat haircut",
      amount: "125",
    },
    {
      id: "10",
      names: "taper haircut",
      amount: "150",
    },
    {
      id: "11",
      names: "fade haircut",
      amount: "175",
    },
    {
      id: "12",
      names: "New Look",
      amount: "200",
    },
    {
      id: "13",
      names: "neat haircut",
      amount: "125",
    },
    {
      id: "14",
      names: "taper haircut",
      amount: "150",
    },
    {
      id: "15",
      names: "fade haircut",
      amount: "175",
    },
    {
      id: "16",
      names: "New Look",
      amount: "200",
    },
  ];

  const billData = [
    {
      names: "New Look",
      amount: 200,
      staffName: "furkaan",
    },
    {
      names: "neat haircut",
      amount: 125,
      staffName: "furkaan",
    },
    {
      names: "O3 Facial",
      amount: 5000,
      staffName: "furkaan",
    },
    {
      names: "fade haircut",
      amount: 175,
      staffName: "furkaan",
    },
  ];

  const handleChange = (event, index) => {
    console.log(event.target.value, index);
    setBillingServiceData((prevState)=>{
      prevState[index]['staffID'] = event.target.value;
      return [...prevState];
    })
  };

  const deleted = (index) =>{
    alert(index)
    billingServiceData.splice(index,1)
  }

  return (
    <div>
      <Modal
        aria-labelledby="close-modal-title"
        open={props.data}
        onClose={(_event, reason) => {
          alert(`Reason: ${reason}`);
          props.setdata(false);
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
            width: 1000,
            borderRadius: "md",
            p: 3,
            height: 550,
            background: "white",
          }}
        >
          <ModalClose variant="outlined" />
          <div className="inside_modal">
            <div className="bill_flex">
              <div>
                <div className="cus_name">
                  <span>{props.cusName}</span>
                </div>
                <div className="cus_num">
                  <LocalPhoneIcon />
                  <span>{props.cusNum}</span>
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
                                        setBillingServiceData((preState) => {
                                          return [
                                            ...preState,
                                            { ...item, staffID: 0 },
                                          ];
                                        });
                                        // handleAdd();
                                        // setNames(item.serviceName);
                                        // setAmount(item.servicePrice);
                                      }}
                                    >
                                      <div className="service_name">
                                        {item.serviceName}
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
                {billingServiceData?.map((item, index) => {
                  return (
                    <div className="amt_staff">
                      <div className="make_service">{item.serviceName}</div>
                      <div className="make_service">{item.servicePrice}</div>
                      <div className="make_service">
                        <FormControl
                            sx={{ m: 1, minWidth: 120 }}
                            size="small"
                          >
                            <InputLabel id="demo-select-small-label">
                              staff
                            </InputLabel>
                            <Select
                              key={item._id}
                              labelId="demo-select-small-label"
                              label="staff"
                              onChange={(e) => {
                                handleChange(e,index)
                              }}  
                            >
                              <MenuItem value={0}>
                                <em>None</em>
                              </MenuItem>
                              {staffData.map(p => (
                                    <MenuItem  value={p._id}>
                                      {p.staffName}
                                    </MenuItem>
                                  ))}
                            </Select>
                          </FormControl>

                               

                       
                      </div>

                      <CloseOutlinedIcon 
                        style={{marginTop : "15px" , cursor :"pointer"}}
                          onClick={() => {
                            deleted(index)
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
                    RS.{totalAmount}
                  </div>
                </div>
                <div className="make_bill tax">
                  <div>without tax</div>
                  <div> RS.{totalAmount}</div>
                </div>
              </div>
              <div className="make_bill">
                <div className="total_amount">RS.{totalAmount}</div>
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
                <div>
                  <Button variant="contained">Contained</Button>
                </div>
              </div>
            </div>
          </div>
        </Sheet>
      </Modal>
      <div>{/* <Bill_list sethandle={setOpenBoxs} handle={openBoxs} /> */}</div>
    </div>
  );
}

export default Bill_mode;
