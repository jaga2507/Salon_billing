// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

// function Makebill (){

    
//   const [age, setAge] = React.useState('');

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

  
  

//     return(
//         <div>
//             <div >
//               <div className='cus_welcome' >
//                 Make a bill
//               </div>
//               <div className='bill_det' >
//                 {/* {billData.map(item=>( */}
//                   <div className='make_bill' >
//                     <div>
//                       {/* {nameprop.map((item)=>(
//                         <div className='make_service' >
//                           {item}
//                         </div>
//                       ))} */}
//                     </div>
//                     <div>
//                       {/* {amountprop.map((item)=>( */}
//                         <div className='amt_staff' >
//                           <div className='make_service'>
//                             {/* {item} */}
//                           </div>
//                           <div className='make_staff' >
//                             <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//                               <InputLabel id="demo-select-small-label">Age</InputLabel>
//                               <Select
//                                 labelId="demo-select-small-label"
//                                 id="demo-select-small"
//                                 value={age}
//                                 label="Age"
//                                 onChange={handleChange}
//                               >
//                                 <MenuItem value="">
//                                   <em>None</em>
//                                 </MenuItem>
//                                 <MenuItem value={10}>furkaan</MenuItem>
//                                 <MenuItem value={20}>salman</MenuItem>
//                                 <MenuItem value={30}>firoz</MenuItem>
//                                 <MenuItem value={30}>malik</MenuItem>
//                                 <MenuItem value={30}>aalam</MenuItem>
//                                 <MenuItem value={30}>naved</MenuItem>
//                               </Select>
//                             </FormControl>
//                           </div>
//                         </div>
//                       {/* ))} */}
//                     </div>
//                   </div>
//                 {/* ))} */}
//               </div>
//               <div className="tax_tag" >
//                 <div>

//                 </div>
//                 <div className='make_bill tax' >
//                   <div>
//                     with tax
//                   </div>
//                   <div>
//                     RS.
//                       {/* {billData.amount} */}
//                   </div>
//                 </div>
//                 <div className='make_bill tax' >
//                   <div>
//                     without tax
//                   </div>
//                   <div>
//                     RS.5624
//                   </div>
//                 </div>
//               </div>
//               <div className='make_bill' >
//                 <div className='total_amount' >
//                   RS.5624
//                 </div>
//                 <div className='amount_input' >
//                   <Box
//                     component="form"
//                     sx={{
//                       '& > :not(style)': { m: 1, width: '10ch', height:'60px' },
//                     }}
//                     noValidate
//                     autoComplete="off"
//                   >
//                     <TextField className='TextField' id="outlined-basic" label="Outlined" variant="outlined" />
//                   </Box>
//                 </div>
//                 <div>
//                   <Button variant="contained">Contained</Button>
//                 </div>
//               </div>
//             </div>
//         </div>
//     )
// }

// export default Makebill;    