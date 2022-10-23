import React,{useState} from 'react'
import { TextField, Button, Box, Alert, FormControlLabel, Checkbox, RadioGroup, Radio, Select, InputLabel, MenuItem, Typography} from '@mui/material';
import {useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from '../../services/userAuthApi';
import { storeToken } from '../../services/LocalStorageService';


export const Registration = () => {

  //Forntend se error set kar sakte hai 
    // const [error, setError] = useState({
    //     status:false,
    //     msg:'',
    //     type:''
    // })

  //Backend se Error set 
  const [server_error, setServerError] = useState({})
  //state ko object type banaenge....


    // After submit redirect karne ke liye usenavigate ka use karte hai.
    const navigate = useNavigate()
    //using hooks pass data on registerUser, isLoading for loading  
    const [registerUser, {isLoading}] = useRegisterUserMutation()
    
    const handleSubmit = async (e)=>{
        e.preventDefault();    
        // form se data ko yaha lena hai Webapi se FormData() milta hai official doc me check kar sakte hai
        // or iske jaghat state bana ke bh use kar sakte hai. 
        const data = new FormData(e.currentTarget);
        
        const actualData = {
            firstname: data.get('firstname'),
            lastname: data.get('lastname'),
            email: data.get('email'),
            contact: data.get('contact'),
            usertype:data.get('usertype'),
            gender: data.get('gender'),
            password: data.get('password'),
            password2: data.get('password2'),
            tc:data.get('tc')
        }
        
        console.log(actualData.firstname)


        // if(actualData.firstName && actualData.lastName &&actualData.email && actualData.contact && actualData.userType !== "selectType" && actualData.gender && actualData.password  && actualData.tc !== null){
        //     if(actualData.password === actualData.password2 ){
                 
        //     console.log(actualData)
        //     // clear form using simple javascript
        //     // agar jub backend ka kam karenge to yaha pe Ajax ya Axios ka use karke data ko backend me send kar denge.
        //     document.getElementById('registration-form').reset()
        //     setError({status:true, msg:'Registration Successfully', type:'success'})
        //     navigate('/dashboard')
        //     }
        //     else{
        //         setError({status:true, msg:' Password and confirm Password are does not match.', type:'error'})
                
        //     }
        // }
        // else{
        //     setError({status:true, msg:'All Fields are Required', type:'error'})
        //     console.log("All Fields are required")
        // }
        const res = await registerUser(actualData)
        //res pe response milega
       if(res.error){
        console.log(res.error.data.errors)
        setServerError(res.error.data.errors)
        console.log(server_error.usertype)
       }

       if(res.data ){
        console.log(res.data)
        storeToken(res.data.token)
        navigate('/account')
      }
    }

const [userRole, setUserRole] = useState("");

const handleChange = (event) => {
  setUserRole(event.target.value);
  };


  return (
    <>
    // {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : "" }

    // {server_error.firstname ? console.log(server_error.firstname[0]) : "" }
    
          <Box component='form' noValidate sx={{ mt:1 }} id='registration-form' onSubmit={handleSubmit}>
            <Box sx ={{display:"flex", gap:0.5 }}>       
                <TextField  InputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }} margin='normal' required  id='firstName' name='firstname' label='FirstName'/>

                {server_error.firstname ? <Typography style={{fontSize:12,color:'red', paddingLeft:10}}>Enter Your FirstName</Typography> : "" }

                

                <TextField InputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }} margin='normal' required  id='lastName' name='lastname' label='LastName'/>

                {server_error.lastname ? <Typography style={{fontSize:12,color:'red', paddingLeft:10}}>Enter Your LastName</Typography> : "" }
            </Box>

            <TextField InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }} margin='normal' required fullWidth id='email' name='email' label='Email Address'/>

            {server_error.email ? <Typography style={{fontSize:12,color:'red', paddingLeft:10}}>Enter Your Email</Typography> : "" }

            <TextField sx={{ mt: 2,
                }}
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
                label='Contact Number'
                type="number"
                name="contact"
                placeholder='Enter Phone number'
                variant='outlined'
                fullWidth
                required
                onInput = {(e) =>{
                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)}}        
            />

            {server_error.contact ? <Typography style={{fontSize:12,color:'red', paddingLeft:10}}>Enter Your Phone Number
            </Typography> : "" }

            <InputLabel sx={{ mt: 4, minWidth: 120, fontSize: 14  }} >Gender</InputLabel>
            <RadioGroup 
                sx={{ '& .MuiSvgIcon-root': {fontSize: 18,}}}
                row
                defaultValue="male"
                name="gender" 
                size="small"
                required
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel  value="other" control={<Radio />} label="Other" />
            </RadioGroup>

            {server_error.gender ? <Typography style={{fontSize:12,color:'red', paddingLeft:10}}>{server_error.gender[0]}</Typography> : "" }

            <InputLabel sx={{ mt: 4, minWidth: 120, fontSize: 14  }} 
            id="SelectUserType">SelectUserType *</InputLabel>
            <Select
              sx={{mb: 1, minWidth: 200, fontSize: 14 }}
              required
              labelId="SelectUserType"
              name= "usertype"
              id="userType"
              value={userRole}
              label="users"
              onChange={handleChange}
            >
              <MenuItem sx={{ fontSize: 14} } value={"teacher"}>Teacher</MenuItem>
              <MenuItem sx={{ fontSize: 14} } value={"student"}>Student</MenuItem>
            </Select>

          {server_error.usertype ? <Typography style={{fontSize:12,color:'red', paddingLeft:10}}>Select User Type</Typography> : "" }

          <TextField InputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }} margin='normal' required fullWidth id='password' name='password' type='password' label='Password'/>

          {server_error.password ? <Typography style={{fontSize:12,color:'red', paddingLeft:10}}>Enter Your Password</Typography> : "" }

          <TextField InputProps={{ style: { fontSize: 14 } }}
          InputLabelProps={{ style: { fontSize: 14 } }} margin='normal' required fullWidth id='password2' name='password2' type='password' label='Confirmation Password'/>

          {server_error.password2 ? <Typography style={{fontSize:12,color:'red', paddingLeft:10}}>Enter Your Confirm Password</Typography> : "" }

          <FormControlLabel size='small' control={<Checkbox value={true} color="primary" name="tc" id="tc"/>} label="I agree to term and condition."/>

          {server_error.tc ? <span style={{fontSize:12,color:'red', paddingLeft:10}}>Select Check Box</span> : "" }

          <Box textAlign='center'>
              <Button size='small' type='submit' sx={{mt:3, mb:2, px:5}} variant='contained'>Join</Button>
          </Box>
   
    {/*by default Alert green rahta hai aise red ya error ke liye severity='error' karna padega

    yaha turnary oerator ka use karenge kyunki status false starting me false rahega */}
   {server_error.non_field_errors? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> : ''}
</Box>
</>
  )
}
