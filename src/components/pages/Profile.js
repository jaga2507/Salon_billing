import React from "react";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

function Profile() {
    return(
        <div className="profile" >
            <div className="pic_profile" >
                <div className="img" >
                    <img src="https://www.siouxlandproud.com/wp-content/uploads/sites/68/2020/03/Sparklight-logo.jpg?w=1280&h=720&crop=1" alt="#" />
                </div>
                <div className="edit" >
                    <Button><EditIcon/></Button>
                </div>
                <div className="name">
                    McKingstown
                </div>
                <div className="email" >
                    mjagadish25072002@gmail.com
                </div>
                <div className="phone">
                    6382102204
                </div>
                <div className="address">
                    {/* <span className="sale">Address</span> */}
                    46/46D, barnaby road, kilpauk, 600010
                </div>
                <div className="address ">
                    <a href="#" ><InstagramIcon/> Insta</a>
                    <a href="#" ><FacebookIcon/> Facebook</a>
                    <a href="#" ><GoogleIcon/> Google</a>
                </div>
            </div>
            <div className="pic_profile" >
                profile
            </div>
        </div>
    )
}

export default Profile;