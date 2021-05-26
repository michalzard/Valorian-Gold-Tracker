import React from 'react'
import ItemList from "./ItemList";
import "../styles/Content.scss";
import {Button,TextField,Menu,MenuItem} from "@material-ui/core";
import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from "@material-ui/core";
import { useState } from 'react';

function Content() {
    return (
        <div className="content">
        <ContentHeader/>
        <ItemList/>
        <ContentFooter/>
        </div>
    )
}

export default Content;


function ContentHeader(){
    return(
        <div className="header">
        <h4>Header</h4>
        </div>
    )
}

function ContentFooter(){
    const [isOpen,setOpen]=useState(false);
    
    const [anchorEl,setAnchorEl]=useState(null); //anchor where menu attaches for toggle

    return(
        <div className="footer">
        <h4>Footer</h4>
        <Dialog
        className="whole_dialog" id="whole_dialog"
        open={isOpen}
        onClose={()=>{setOpen(false);}} //click away listener
        keepMounted
        >
        <DialogTitle>Create Item</DialogTitle>
        <DialogContent>    
        <DialogContentText>Create item with current prices to be stored</DialogContentText>  
        <TextField label="Name" inputProps={{style:{color:"white"}}} InputLabelProps={{style:{color:"gray"}}} fullWidth
        />
        <div className="category">
        <Button variant="text" color="secondary" id="category" onClick={(e)=>{setAnchorEl(e.currentTarget)}}>Category</Button>
        </div>
        <Menu
         anchorEl={anchorEl}
         keepMounted
         open={Boolean(anchorEl)}
         onClose={()=>{setAnchorEl(null)}}
        >
        <MenuItem>hello</MenuItem>
        </Menu>
        <TextField label="Gold" inputProps={{style:{color:"white"}}} InputLabelProps={{style:{color:"gold"}}}
        />
        <TextField label="Silver" inputProps={{style:{color:"white"}}} InputLabelProps={{style:{color:"silver"}}}
        />
        </DialogContent>
        <DialogActions>
        <Button color="primary" variant="outlined">Add Item</Button>
        <Button color="secondary" variant="outlined" onClick={()=>{setOpen(false)}}>Close</Button>
        </DialogActions>
        </Dialog>
        <Button variant="contained" color="secondary" onClick={()=>{setOpen(true)}}>Add Item</Button>
        </div>
    )
}