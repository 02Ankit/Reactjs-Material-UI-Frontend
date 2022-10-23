import React, { useState } from 'react'
import{ Avatar, Box, Button,  ListItem,  ListItemIcon, ListItemText}from '@mui/material';
import { MenuItem, Menu} from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import SettingsIcon from '@material-ui/icons/Settings'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import image from './my_image.jpeg'
import { useStyles } from '../HeaderStyle';
import { getToken, removeToken } from '../../../services/LocalStorageService';
import { useDispatch } from 'react-redux';
import { unSetUserToken } from '../../../features/authSlice';
import { useGetLoggedUserQuery } from '../../../services/userAuthApi';
import { useEffect } from 'react';

const UserProfile = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const {access_token} = getToken()
    
    const {data, isSuccess} = useGetLoggedUserQuery(access_token)
    // console.log(data)
    //create local state 
    const [userData, setUserData]= useState({email:"", firstname:""})
    
    //Store  User data In Local State
    useEffect(()=>{
        if(data && isSuccess)
        {
            setUserData({email: data.email, firstname: data.firstname})
        }
    },[data, isSuccess])
    
    if(userData.usertype !== 'student'){
        console.log(userData.firstname)
    }
    //usestate ka use karenge value ko null ke liye ya open ke liye 
    // useState Array return karta hai first variable hota hai or second wala SetFunction hota hai 
    const [anchorEl, setAnchorEl] = useState()
    // menu close karne ke liye 
    const handleClose=()=>{
        setAnchorEl(null)    
        }
    // menu open ke liye event(e).currentTarget se open hoga menu
    const handleClick =(e)=>{
        setAnchorEl(e.currentTarget)
    }
    const dropDownData=[
        {
            label:'settings', 
            path:'/dashboard/account',
            icon:<SettingsIcon/>,
        },
        {
            label:'myAccount', 
            path:'/dashboard/account',
            icon:<AccountBoxIcon /> 
        }
    ]

    //    Logout function 
        const navigate = useNavigate()
        const handleLogout=()=>{
            // console.log("Logout Clicked")
            dispatch(unSetUserToken({access_token: null}))
            removeToken()
            navigate('/loginreg')
        }
       
return (
    <Box>   
            
        <Button  //Here we are using props of Button
            color='inherit' 
            aria-controls="simple-menu" //simple-menu id of menu element 
            aria-haspopup="true" 
            onClick={handleClick}
            startIcon={
                <Avatar src={image} className={classes.navAvatar}/>
            }
            >
        </Button>
            
            <Menu id="simple-menu"
            // anchorEl me state ka value lenge jo ki open me denge
                anchorEl={anchorEl}
                keepMounted
                // open me pahele starting me state Null hoga matlab false hoga Boolean me liye hai to false hoga. 
                open={Boolean(anchorEl)}
                onClose={handleClose} 
            >
                    {dropDownData.map((item, i)=>(
                    <MenuItem key={i} component={ListItem} onClick={handleClose}>
                   
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText to={item.path}>
                        {item.label} 
                        </ListItemText>
                       
                    
                    </MenuItem>
                    ))}
                    <MenuItem onClick={handleLogout} ><ExitToAppIcon/>Logout</MenuItem>
            </Menu>
</Box>
  )
}

export default UserProfile