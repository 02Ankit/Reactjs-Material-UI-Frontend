import React,{useState} from 'react'
import { TextField, Button, Box, Alert, Grid, Input, IconButton, Card, CardHeader} from '@mui/material';
import {useNavigate } from 'react-router-dom';
import PhotoCamera from "@material-ui/icons/PhotoCamera";
const Websettings = () => {


  const [error, setError] = useState({
    status:false,
    msg:'',
    type:''
})
// After submit redirect karne ke liye usenavigate ka use karte hai.
const navigate = useNavigate()
const handleSubmit = (e)=>{
    e.preventDefault();    
    // form se data ko yaha lena hai Webapi se FormData() milta hai official doc me check kar sakte hai
    // or iske jaghat state bana ke bh use kar sakte hai. 
    const data = new FormData(e.currentTarget);
    
    const actualData = {
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        password: data.get('password'),
        password2: data.get('password2'),
        tc:data.get('tc')
    }
    
    if(actualData.firstName && actualData.lastName &&actualData.email && actualData.password  && actualData.tc !== null){
        if(actualData.password === actualData.password2){
             
        console.log(actualData)
        // clear form using simple javascript
        // agar jub backend ka kam karenge to yaha pe Ajax ya Axios ka use karke data ko backend me send kar denge.
        document.getElementById('registration-form').reset()
        setError({status:true, msg:'Registration Successfully', type:'success'})
        navigate('/dashboard')
        }else{
            setError({status:true, msg:' Password and confirm Password are does not match.', type:'error'})
            
        }
    }
    else{
        setError({status:true, msg:'All Fields are Required', type:'error'})
        console.log("All Fields are required")
    }
}

  return (
    <Grid container spacing={2}>
    
    <Grid item lg={6} sm={6} >
            <Card style={{padding:20}}>
            <CardHeader
              subheader="The information can be edited"
              title="Website Settings"
            />
            <Box component='form' noValidate sx={{ mt:1 }} id='registration-form' onSubmit={handleSubmit}>
                    
            <TextField 
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }} margin='normal' required fullWidth id='offer' name='offer' label='Short Note For Offer Notify'/>

            <TextField 
            multiline
            rows={5}
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }} 
            margin='normal' 
            required 
            fullWidth 
            id='about' 
            name='about' 
            label='Brief About your Company/Organization'
            placeholder="Minimum 4 line and Maximum 10 lines"/>

            <TextField 
            InputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }} margin='normal' required fullWidth id='offer' name='offer' label='Change Email On Footer '/>


            <Box style={{display:"flex", marginBottom:30,}}>

                <TextField 
                type ="number"
                InputProps={{ style: { fontSize: 14, width:160 }}}
                inputProps={{min:0, max:100000, step:10}}
                InputLabelProps={{ style: { fontSize: 14 } }} 
                id='sessionConducted' 
                name='sessionConducted' 
                label='Session Conducted'
                />
                <TextField 
                type ="number"
                InputProps={{ style: { fontSize: 14, width:160 }}}
                inputProps={{min:0, max:100000, step:10}}
                InputLabelProps={{ style: { fontSize: 14 } }} 
                id='ourTeachers' 
                name='ourTeachers' 
                label='OurTeachers'
                style={{marginLeft:20}}
                />

                <TextField 
                type ="number"
                InputProps={{ style: { fontSize: 14, width:160 }}}
                inputProps={{min:0, max:100000, step:10}}
                InputLabelProps={{ style: { fontSize: 14 } }} 
                id='ourStudents' 
                name='ourStudents' 
                label='Our Students'
                style={{marginLeft:20}}
                />
            </Box>

            {/*by default Alert green rahta hai aise red ya error ke liye severity='error' karna padega

            yaha turnary oerator ka use karenge kyunki status false starting me false rahega */}
          {error.status? <Alert severity={error.type}>{error.msg}</Alert> : ''}
        </Box>
          <Box textAlign='center'>
          <Button size='small' type='submit' sx={{mt:3, mb:2, px:5}} variant='contained'>Update</Button>
          </Box>
        </Card>
</Grid>


<Grid item lg={6} sm={6} sx ={{}}>
<Card>
    <Button style={{ margin:70,}}
    variant="contained" 
    size="small" 
    component="label"
    >
    <span style={{ fontSize:14}}>Upload Service Details</span>
    <Input hidden accept="image/*" multiple type="file" />
    </Button>

    <IconButton 
    color="primary" 
    aria-label="upload picture" 
    component="label">
      <input hidden accept="image/*" type="file" />
      <PhotoCamera />
    </IconButton>

    <Button style={{ margin:70, fontSize:"50"}}
    variant="contained" 
    size="small" 
    component="label"
    >
    <span style={{ fontSize:14}}>Upload Expert reviews</span>
    <Input hidden accept="image/*" multiple type="file" />
    </Button>

    <IconButton 
    color="primary" 
    aria-label="upload picture" 
    component="label">
      <input hidden accept="image/*" type="file" />
      <PhotoCamera />
    </IconButton>

    <Button style={{ margin:70, fontSize:"50"}}
    variant="contained" 
    size="small" 
    component="label"
    >
    <span style={{ fontSize:14}}>Upload Gallery Images</span>
    <Input hidden accept="image/*" multiple type="file" />
    </Button>

    <IconButton 
    color="primary" 
    aria-label="upload picture" 
    component="label">
      <input hidden accept="image/*" type="file" />
      <PhotoCamera />
    </IconButton>
    </Card>
</Grid>
</Grid>

  )
}

export default Websettings