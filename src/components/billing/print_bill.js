import * as React from 'react';
import ReactToPrint from 'react-to-print';
import Bill from './Bill'
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Sheet from '@mui/joy/Sheet';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


    
class ComponentToPrint extends React.Component {
      payment = "CASH";
      phoneNumber = 9428333101;
      address = (
        <p style={{ fontSize: 14, paddingTop: 5, margin: 0, display:"flex", justifyContent:"center" }}>
          <div style={{ fontSize: 16, paddingTop: 0, margin: 0, fontWeight:400,width:"80%", textAlign:"center" }}>
            46/46D, barnaby road, kilpauk, chennai, 600010
            <br />
            {/* Stylish:"Firoz Ali"
            <br /> */}
          </div>
        </p>
      );
      items = [
        ["fade haircut", "1", 175],
        ["shaping", "1", 75],
        ["9 combo", "1", 1499],
        ["zero trim", "1", 40]
      ];
      deliveryCharge = 10;
      packagingCharge = 5;
      cartAmount = 0;
      list(items1) {
        this.calculateFinalAmount();
        return items1.map((num, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{num[0]}</td>
            <td>{num[1]}</td>
            <td>{num[2]}</td>
          </tr>
        ));
      }
      calculateFinalAmount() {
        this.items.map(items => {
          this.cartAmount = this.cartAmount + items[2];
          console.log(this.cartAmount);
        });
        console.log(this.cartAmount);
    
        return this.cartAmount;
      }
      render() {
        return (
          <div style={{textAlign:"center"}} >
            <div>
              <div
                style={{
                  textAlign: "center",
                  fontSize: 26,
                  fontWeight: "bold",
                  marginBottom: "0px"
                }}
              >
                McKingsTown
    
              </div>
              {this.address}
              <div style={{textAlign:"center"}}>
                {/* <span >Payment: {this.payment}</span>
                <br /> */}
                <span style={{ fontSize: 14, padding: 0, margin: 0 }}>Ph.No: {this.phoneNumber}</span>
                <br />
              </div>
    
              <table  className="print_border"  style={{margin:"auto"}}>
                <thead>
                  <th style={{ textAlign: "start", fontSize: 14 }}>S.No</th>
                  <th style={{ textAlign: "start" }}>Product</th>
                  <th style={{ textAlign: "start" }}>Quantity</th>
                  <th style={{ textAlign: "start" }}>Price</th>
                </thead>
                <tbody style={{ fontSize: 14, textAlign: "start" }}>
                  {this.list(this.items)}
                  <tr >
                    <td>
                      {/* <hr /> */}
                      &nbsp;
                      {/* <hr /> */}
                    </td>
                    <td>
                      {/* <hr /> */}
                      Total Amount
                      {/* <hr /> */}
                    </td>
                    <td>
                      {/* <hr /> */}
                      &nbsp;
                      {/* <hr /> */}
                    </td>
                    <td>
                      {/* <hr /> */}
                      {this.cartAmount +
                        (this.cartAmount < 99 ? 10 : 0) +
                        (this.cartAmount < 149 ? 5 : 0)}
                      {/* <hr /> */}
                    </td>
                  </tr>
                </tbody>
              </table>
                <br />
              <div style={{ textAlign: "center", fontSize: 16, marginTop: "10px" }}>
                <div>****************</div>
                THANK YOU
                <div>****************</div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        );
      }
    }

class Example extends React.Component {
    render() {
        return (
            <div>
                <ReactToPrint
                    trigger={() => <a href="#">Print this out!</a>}
                    content={() => this.componentRef}
                />
                <ComponentToPrint  ref={el => (this.componentRef = el)} />
            </div>
        );
    }
}


function print_bill(props) {
    return(
        <div>
            {/* <Bill/> */}
            <Modal
                aria-labelledby="close-modal-title"
                open={props.handles}
                onClose={(_event, reason) => {
                alert(`Reason: ${reason}`);
                props.sethandles(false)
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
                    height:550,
                    background:"white",
                }}
                >
                    <ModalClose variant="outlined" />
                    <div>
                        <div className='cus_welcome' >
                        <ArrowBackIosNewIcon/>
                        Welcome to Bill Mode
                        </div>
                        <div>
                            <div className='bill_sheet' >
                                <Example/>
                            </div>
                        </div>
                    </div>
                </Sheet>
            </Modal>
        </div>
    )
}

export default print_bill;