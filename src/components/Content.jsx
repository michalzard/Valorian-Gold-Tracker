import React from 'react'
import ItemList from "./ItemList";
import "../styles/Content.scss";
import {Button,TextField,Menu,MenuItem,Typography} from "@material-ui/core";
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
        <Dialog className="whole_dialog" id="whole_dialog" open={isOpen} onClose={()=>{setOpen(false);}} keepMounted>
        <DialogTitle>Create Item</DialogTitle>
        <DialogContent>    
        <DialogContentText>Create item with current prices to be stored.<br/>Prices can be only entered as 3 digit numbers.</DialogContentText>  
        <TextField label="Name" inputProps={{style:{color:"white"}}} InputLabelProps={{style:{color:"gray"}}} fullWidth/>
        <Typography variant="h6" gutterBottom style={{marginTop:"10px"}}>Categories to sort by</Typography>
        <Categories/>
        <div className="prices">
        <TextField label="Gold" inputProps={{style:{color:"white"}}} InputLabelProps={{style:{color:"gold"}}} fullWidth/>
        <TextField label="Silver" inputProps={{style:{color:"white"}}} InputLabelProps={{style:{color:"silver"}}} fullWidth/>
        </div>
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

function Categories(){
    const [categoryAnchor,setCategoryAnchor]=useState(null); //anchor where menu attaches for toggle
    const [heroClassAnchor,setHeroClassAnchor]=useState(null); //anchor where menu attaches for toggle
    const [accessoriesAnchor,setAccessoriesAnchor]=useState(null); //anchor where menu attaches for toggle
    const [goodsAnchor,setGoodAnchor]=useState(null); //anchor where menu attaches for toggle
    const [paidAnchor,setPaidAnchor]=useState(null); //anchor where menu attaches for toggle

    const [category,setCategory]=useState("Default");
    const [heroClass,setHeroClass]=useState("Default");
    const [accessories,setAccessories]=useState("Default");
    const [goods,setGoods]=useState("Default");
    const [paid,setPaid]=useState("Default");

    const CategoryMenuOptions=[
    "Zbrane",
    "Brneni",
    "Doplnky",
    "Spotrebni zbozi",
    "Placene zbozi"
    ];
    const HeroMenuOptions=[
        "Bojovnik",
        "Stinovy Bezec",
        "Lukostrelec",
        "Kouzelnik",
        "Knez",
        "Zarikavac"
    ];
    const AccessoriesMenuOptions=[
        "Prsten",
        "Nahrdelnik",
        "Nausnice",
    ];
    const GoodsMenuOptions=[
        "Tasky",
        "Prisady",
        "Obycajne Lektvary",
        "Specialne Predmet",
        "Vylepseni",
        "Dalsi",
    ];
    const PaidOptions=[
    "Placene"
    ];

    return(
        <div className="categoryinfo">
        <div className="categorybtn">
        <Button variant="text" color="primary" id="category" onClick={(e)=>{setCategoryAnchor(e.currentTarget)}}>{category}</Button>
        </div>
        <Menu
        anchorEl={categoryAnchor}
        keepMounted
        open={Boolean(categoryAnchor)}
        onClose={()=>{setCategoryAnchor(null)}}
        >
        {
            CategoryMenuOptions.map((category,i)=>{
            return <MenuItem key={i} onClick={()=>{setCategory(category); setCategoryAnchor(null); }}>{category}</MenuItem>
            })
        }
        </Menu>
        
        <div className="categorybtn">
        <Button variant="text" color="primary" id="category" onClick={(e)=>{setHeroClassAnchor(e.currentTarget)}}>{heroClass}</Button>
        </div>
        <Menu
        anchorEl={heroClassAnchor}
        keepMounted
        open={Boolean(heroClassAnchor)}
        onClose={()=>{setHeroClassAnchor(null)}}
        >
        {
            HeroMenuOptions.map((hero,i)=>{
            return <MenuItem key={i} onClick={()=>{setHeroClass(hero); setHeroClassAnchor(null); }}>{hero}</MenuItem>
            })
        }
        </Menu>

        <div className="categorybtn">
        <Button variant="text" color="primary" id="category" onClick={(e)=>{setAccessoriesAnchor(e.currentTarget)}}>{accessories}</Button>
        </div>
        <Menu
        anchorEl={accessoriesAnchor}
        keepMounted
        open={Boolean(accessoriesAnchor)}
        onClose={()=>{setAccessoriesAnchor(null)}}
        >
        {
            AccessoriesMenuOptions.map((acc,i)=>{
            return <MenuItem key={i} onClick={()=>{setAccessories(acc); setAccessoriesAnchor(null); }}>{acc}</MenuItem>
            })
        }
        </Menu>

        <div className="categorybtn">
        <Button variant="text" color="primary" id="category" onClick={(e)=>{setGoodAnchor(e.currentTarget)}}>{goods}</Button>
        </div>
        <Menu
        anchorEl={goodsAnchor}
        keepMounted
        open={Boolean(goodsAnchor)}
        onClose={()=>{setAccessoriesAnchor(null)}}
        >
        {
            GoodsMenuOptions.map((goods,i)=>{
            return <MenuItem key={i} onClick={()=>{setGoods(goods); setGoodAnchor(null); }}>{goods}</MenuItem>
            })
        }
        </Menu>

        <div className="categorybtn">
        <Button variant="text" color="primary" id="category" onClick={(e)=>{setPaidAnchor(e.currentTarget)}}>{paid}</Button>
        </div>
        <Menu
        anchorEl={paidAnchor}
        keepMounted
        open={Boolean(paidAnchor)}
        onClose={()=>{setPaidAnchor(null)}}
        >
        {
            PaidOptions.map((paid,i)=>{
            return <MenuItem key={i} onClick={()=>{setPaid(paid); setPaidAnchor(null); }}>{paid}</MenuItem>
            })
        }
        </Menu>

        </div>
    )
}