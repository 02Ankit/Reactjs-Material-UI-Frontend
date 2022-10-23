import { Box } from '@material-ui/core'
import React from 'react'
import { useStyles } from '../../UserHeader/HeaderStyle'
import Navheader from '../../UserHeader/Navheader'
import Sidenav from '../../UserHeader/SideNav/Sidenav'

export const Notification = () => {
  const classes = useStyles()
  return (
    <Box>
    <Navheader />
    <Sidenav/>
      <Box className={classes.wrapper}>
      <h1>Notifications</h1>
    </Box>
    </Box>
  )
}
