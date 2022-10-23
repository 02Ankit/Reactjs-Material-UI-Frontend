import { Box } from '@material-ui/core'
import React from 'react'
import Navheader from '../../UserHeader/Navheader'
import Sidenav from '../../UserHeader/SideNav/Sidenav'

const Enquirylist = () => {
  return (
    
    <Box>
    <Navheader />
    <Sidenav/>
      <Box sx={{ml:40, mt:8}}>
      <h1>Enquiry</h1>
    </Box>
    </Box>
  )
}

export default Enquirylist