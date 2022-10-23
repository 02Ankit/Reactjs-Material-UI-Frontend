import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Grid,
    Typography
  } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getToken } from '../../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../../services/userAuthApi';
import { AccountProfileDetails } from './account-profile-details';

  const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'jagdalpur',
    country: 'India',
    jobTitle: 'Director',
    name: 'Vimla Bhol',
    timezone: 'GTM-7'
  };
  
 

 export  const AccountProfile = (props) => {
    
    const dispatch = useDispatch()
    const {access_token} = getToken()
  
    const {data, isSuccess} = useGetLoggedUserQuery(access_token)
    // console.log(data)
    //create local state 
    const [userData, setUserData]= useState({email:"", firstname:"", lastname:""})
    
    //Store  User data In Local State
    useEffect(()=>{
        if(data && isSuccess)
        {
            setUserData({email: data.email, firstname: data.firstname, lastname: data.lastname})
        }
    },[data, isSuccess])
    //******************************************************************** */
return(

    <Grid container gap={2}>
    
    <Grid item md={6} lg={3} sm={6}>
    
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={user.avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
           { `${userData.firstname} ${userData.lastname}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {user.timezone}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
        >
          Upload picture
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md={6} lg={7} sm={6}>
    <AccountProfileDetails />
    </Grid>
    </Grid>
  )};

