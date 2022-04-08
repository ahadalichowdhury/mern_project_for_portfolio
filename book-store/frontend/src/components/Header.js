import React, { useState } from 'react'
import {AppBar, Toolbar,Typography, Tabs, Tab} from "@mui/material"
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from "react-router-dom"

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar position="static">
       <Toolbar variant="dense">
        <Typography >
        <LibraryBooksIcon/>
       </Typography>
       <Tabs  sx={{ml: 'auto'}} textColor='inherit' value={value} onChange={(e, val)=>{
         setValue(val) 
       }} indicatorColor="secondary">
         <Tab  label="add product" LinkComponent={NavLink} to="/add"/>
         <Tab label="Books" LinkComponent={NavLink} to="/books"/>
         <Tab label="Contact Us" LinkComponent={NavLink} to="/about"/>
         
       </Tabs>
       </Toolbar>
</AppBar>
    </div>
  )
}

export default Header
