import React  from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Input from '@mui/joy/Input';
import Sheet from '@mui/joy/Sheet';
import Buttons from '@mui/material/Button';
import BillMode from './Bill_mode'
// import { useForm } from 'react-hook-form'


export default function CloseModal() {
  const [open, setOpen] = React.useState(false);
  const [openBox, setOpenBox] = React.useState(false);
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [error, setError] = React.useState(false);
  console.log('name', name)
  console.log('number', number)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length==0||number.length==0){
      setError(true)
    }
    if (name&&number) {
      console.log("name",name,'\nnumber', number)  
    }
    if(name.length==5||number.length==10){
      setOpenBox(true)
      setOpen(false)
    }
  }


  return (
    <React.Fragment>
      <Button className='bill_button' variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        +
      </Button>
      <Modal
        aria-labelledby="close-modal-title"
        open={open}
        onClose={(_event, reason) => {
          alert(`Reason: ${reason}`);
          setOpen(false);
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: 700,
            borderRadius: 'md',
            p: 3,
            // height:550,
            background:"white",

          }}
        >
          <ModalClose variant="outlined" />
          <div>
            <div className='cus_welcome' >
              Welcome to customer
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <div className="cus_modal" >
                  Please Enter the customer details
                </div>
                <div>
                  <div className='cus_number'>
                    Enter the customer name
                  </div>
                    <div className='cus_input'>
                      <Input color="warning" placeholder='Enter the customer name' onChange={e=>setName(e.target.value)} />
                      {error&&name.length<=0 ?  <span style={{color:"red"}}>This field is required</span>:""}
                    </div>
                </div>
                <div>
                  <div className='cus_number'>
                  Enter the customer mobile number
                  </div>
                    <div className='cus_input' >
                      <Input color="warning" placeholder='Enter the customer number'  onChange={e=>{setNumber(e.target.value)}} />
                      {error&&number.length<=9 ? <span style={{color:"red"}}>This field must be 10 characters long</span> : ""}
                      {error&&number.length>10 ? <span style={{color:"red"}}>Invalid mobile number</span> : ""}
                    </div>
                </div>
              </div>
              <div className='cus_button' >
                <Buttons variant="outlined" color="warning">Book appointment</Buttons>
                <Buttons type='submit' variant="outlined" color="warning">submit</Buttons>
              </div>
            </form>
          </div>
        </Sheet>
      </Modal>
          <div>
            <BillMode setdata={setOpenBox} data={openBox} cusName={name} cusNum={number}  />
          </div>
    </React.Fragment>
  );
}