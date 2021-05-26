import React from 'react'
import ItemList from "./ItemList";
import "../styles/Content.scss";
import {Button} from "@material-ui/core";
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
    return(
        <div className="footer">
        <h4>Footer</h4>
        <Dialog
        className="whole_dialog"
        open={isOpen}
        onClose={()=>{setOpen(false);}} //click away listener
        keepMounted
        >
        <DialogTitle>Add Item</DialogTitle>
        <DialogContent>

        <DialogContentText>
        text
        </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button color="primary" variant="outlined">Add Item</Button>
        <Button color="secondary" variant="outlined" onClick={()=>{setOpen(false)}}>Close</Button>
        </DialogActions>
        </Dialog>
        <Button variant="contained" onClick={()=>{setOpen(true)}}>Add Item</Button>
        </div>
    )
}