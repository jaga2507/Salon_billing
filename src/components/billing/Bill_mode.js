import React, { useState, useEffect } from "react";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Bill_list from "../billing/Bill_list.js";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Bill_mode(props) {
  const [datas, setDatas] = useState(false);
  const [openBoxs, setOpenBoxs] = useState(true);

  // const [openBoxs, setOpenBoxs] = useState(false);
  const [id, setId] = useState("");
  const [names, setNames] = useState("");
  const [nameprop, setNamesprop] = useState([]);
  const [amount, setAmount] = useState("");
  const [amountprop, setAmountprop] = useState([]);


  const handleAdd = (e) => {
    if (!names) {
      alert("enter an item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 10000),
      value: names,
    };

    const amounts = {
      id: Math.floor(Math.random() * 10000),
      value: amount,
    };
    setNamesprop((oldList) => [...oldList, item]);
    setAmountprop((oldAmount) => [...oldAmount, amounts]);
    setNames("");
    setAmount("");
  };


  const data = [
    {
      names: "hair service",
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
      names: "hair service",
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

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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

                  <div style={{display : "flex"}}>
                    <ArrowBackIosNewIcon  
                      style={{marginTop : "30px" , cursor :"pointer"}}
                      onClick={() => {
                        setOpenBoxs(true);
                      }}
                    />
                    <div className=" sale">Select The Service Type</div>
                  </div>

                  <div>
                    {openBoxs ? (
                      <div className="bill_sheet">
                        {data.map((item) => (
                          <div
                            onClick={() => {
                              setOpenBoxs(false);
                              // props.setdata(false)
                            }}
                            className="Bill_card"
                          >
                            <div className="service_name">{item.names}</div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // <Bill_list sethandle={setOpenBoxs} handle={openBoxs} />
                      <div>
                        <div>
                          {/* <Print sethandles={setOpenBoxs} handles={openBoxs} /> */}
                          <div className="bill_sheet">
                            {service.map((item) => (
                              <div
                                className="Bill_card"
                                onClick={() => {
                                  handleAdd();
                                  setId(item.id);
                                  setNames(item.names);
                                  setAmount(item.amount);
                                }}
                              >
                                <div className="service_name">{item.names}</div>
                                <div className="service_name">
                                  {item.amount}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bills">
              <div className="cus_welcome">Make a bill</div>
              <div className="bill_det">
                {/* {billData.map(item=>( */}
                <div className="make_bill">
                  <div>
                    {nameprop.map((item) => (
                      <div key={item.id} className="make_service">
                        {item.value}
                      </div>
                    ))}
                  </div>
                  <div>
                    {amountprop.map((item) => (
                      <div className="amt_staff">
                        <div className="make_service">{item.value}</div>
                        <div className="make_service">
                          <FormControl
                            sx={{ m: 1, minWidth: 120 }}
                            size="small"
                          >
                            <InputLabel id="demo-select-small-label">
                              staff
                            </InputLabel>
                            <Select
                              labelId="demo-select-small-label"
                              id="demo-select-small"
                              value={age}
                              label="staff"
                              onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value={10}>furkaan</MenuItem>
                              <MenuItem value={20}>salman</MenuItem>
                              <MenuItem value={30}>firoz</MenuItem>
                              <MenuItem value={30}>malik</MenuItem>
                              <MenuItem value={30}>aalam</MenuItem>
                              <MenuItem value={30}>naved</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* ))} */}
              </div>
              <div className="tax_tag">
                <div></div>
                <div className="make_bill tax">
                  <div>with tax</div>
                  <div>
                    RS.
                    {/* {billData.amount} */}
                  </div>
                </div>
                <div className="make_bill tax">
                  <div>without tax</div>
                  <div>RS.5624</div>
                </div>
              </div>
              <div className="make_bill">
                <div className="total_amount">RS.5624</div>
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
