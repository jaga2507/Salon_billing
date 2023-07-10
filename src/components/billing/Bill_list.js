import * as React from 'react';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
// import {useNavigate} from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Print from './print_bill'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Bill_mode(props) {
  const [openBoxs, setOpenBoxs] = React.useState(false);
  const [names, setNames] = React.useState("");
  const [amount, setAmount] = React.useState("");

  
  
  const handleAdd = (e) => {
    // e.preventDefault();

    props.onClick({
      id:Math.floor(Math.random() * 10000),
      text:names
    });

    setNames("");
  }


  console.log("setnames", names)
  console.log("setopenss", amount)
  
  const service = [
    {
      names:"neat haircut",
      amount:"125"
    },
    {
      names:"taper haircut",
      amount:"150"
    },
    {
      names:"fade haircut",
      amount:"175"
    },
    {
      names:"New Look",
      amount:"200"
    },
    {
      names:"neat haircut",
      amount:"125"
    },
    {
      names:"taper haircut",
      amount:"150"
    },
    {
      names:"fade haircut",
      amount:"175"
    },
    {
      names:"New Look",
      amount:"200"
    },
    {
      names:"neat haircut",
      amount:"125"
    },
    {
      names:"taper haircut",
      amount:"150"
    },
    {
      names:"fade haircut",
      amount:"175"
    },
    {
      names:"New Look",
      amount:"200"
    },
    {
      names:"neat haircut",
      amount:"125"
    },
    {
      names:"taper haircut",
      amount:"150"
    },
    {
      names:"fade haircut",
      amount:"175"
    },
    { 
      names:"New Look",
      amount:"200"
    },
  ]

  return (
    <div>
        <div>
              {/* <Print sethandles={setOpenBoxs} handles={openBoxs} /> */}
          <div className='bill_sheet' >
            {service.map((item) => (
              <div className='Bill_card' onClick={() => {
                handleAdd();
                // setId(item.id)
                setNames(item.names);
                setAmount(item.amount);
              }} >
                <div className='service_name' >
                  {item.names}
                </div>
                <div className='service_name' >
                  {item.amount}
                </div>
              </div>
            ))}
          </div> 
        </div>
    </div>
  );
}

export default Bill_mode;