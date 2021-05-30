import React from 'react'
import ItemList from "./ItemList";
import "../styles/Content.scss";
import {Button,TextField,Menu,MenuItem,Typography} from "@material-ui/core";
import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions} from "@material-ui/core";
import { useState} from 'react';

function Content() {
    const [items,setItems]=useState([]);
    const addItem=(item)=>{
        setItems(prev=>([...prev,item]));
    }

    return (
        <div className="content">
        <ContentHeader/>
        <ItemList list={items}/>
        <ContentFooter addItem={addItem}/>
        </div>
    )
}

export default Content;


function ContentHeader(){
    return(
        <div className="header">
        <h4 style={{marginLeft:"20px"}}>4Story Price Tracker</h4>
        </div>
    )
}

function ContentFooter({addItem}){
    const [isOpen,setOpen]=useState(false);

    const [itemName,setItemName]=useState("");
    const [goldValue,setGoldValue]=useState("");
    const [silverValue,setSilverValue]=useState("");
    const [categories,setCategories]=useState(null);
    return(
        <div className="footer">
        <h4>Footer</h4>
        <Dialog className="whole_dialog" id="whole_dialog" open={isOpen} onClose={()=>{setOpen(false);}} keepMounted>
        <DialogTitle>Create Item</DialogTitle>
        <DialogContent>    
        <DialogContentText>Create item with current prices to be stored.<br/>Prices can be only entered as 3 digit numbers.</DialogContentText>  
        <TextField label="Name" inputProps={{style:{color:"white"}}} InputLabelProps={{style:{color:"gray"}}} placeholder="Vytazek preziti" fullWidth
        onChange={(e)=>{setItemName(e.currentTarget.value);}} value={itemName}
        />
        <Typography variant="h6" gutterBottom style={{marginTop:"10px"}}>Categories to sort by</Typography>
        <Categories setCategories={setCategories}/>
        <div className="prices">
        <TextField label="Gold" inputProps={{style:{color:"white"},maxLength:6}} InputLabelProps={{style:{color:"gold"}}} fullWidth
        onChange={(e)=>{setGoldValue(e.currentTarget.value);}} value={goldValue} placeholder="999999"
        />
        <TextField label="Silver" inputProps={{style:{color:"white"},maxLength:3}} InputLabelProps={{style:{color:"silver"}}} fullWidth
        onChange={(e)=>{setSilverValue(e.currentTarget.value);}} value={silverValue} placeholder="999"
        />
        </div>
        </DialogContent>
        <DialogActions>
        <Button color="primary" variant="outlined" onClick={()=>{addItem({itemName,price:{gold:goldValue,silver:silverValue}});setItemName("");setGoldValue("");setSilverValue("");setOpen(false);}}>Add Item</Button>
        <Button color="secondary" variant="outlined" onClick={()=>{setOpen(false);}}>Close</Button>
        </DialogActions>
        </Dialog>
        <Button variant="contained" color="secondary" onClick={()=>{setOpen(true);}}>Add Item</Button>
        </div>
    )
}

function Categories({setCategories}){
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
    "Placene zbozi",
    "Default"
    ];
    const HeroMenuOptions=[
        "Bojovnik",
        "Stinovy Bezec",
        "Lukostrelec",
        "Kouzelnik",
        "Knez",
        "Zarikavac",
        "Default"
    ];
    const AccessoriesMenuOptions=[
        "Prsten",
        "Nahrdelnik",
        "Nausnice",
        "Default"
    ];
    const GoodsMenuOptions=[
        "Tasky",
        "Prisady",
        "Obycajne Lektvary",
        "Specialne Predmet",
        "Vylepseni",
        "Dalsi",
        "Default"
    ];
    const PaidOptions=[
    "Placene",
    "Default"
    ];

    return(
        <div className="categoryinfo">
        <div className="categorybtn">
        <Button variant="text" color="secondary" id="category" onClick={(e)=>{setCategoryAnchor(e.currentTarget)}}>{category}</Button>
        </div>
        <Menu
        anchorEl={categoryAnchor}
        keepMounted
        open={Boolean(categoryAnchor)}
        onClose={()=>{setCategoryAnchor(null);}}
        >
        {
            CategoryMenuOptions.map((category,i)=>{
            return <MenuItem key={i} onClick={()=>{setCategory(category); setCategoryAnchor(null); }}>{category}</MenuItem>
            })
        }
        </Menu>
        
        <div className="categorybtn">
        <Button variant="text" color="secondary" id="category" onClick={(e)=>{setHeroClassAnchor(e.currentTarget);}}>{heroClass}</Button>
        </div>
        <Menu
        anchorEl={heroClassAnchor}
        keepMounted
        open={Boolean(heroClassAnchor)}
        onClose={()=>{setHeroClassAnchor(null);}}
        >
        {
            HeroMenuOptions.map((hero,i)=>{
            return <MenuItem key={i} onClick={()=>{setHeroClass(hero); setHeroClassAnchor(null); }}>{hero}</MenuItem>
            })
        }
        </Menu>

        <div className="categorybtn">
        <Button variant="text" color="secondary" id="category" onClick={(e)=>{setAccessoriesAnchor(e.currentTarget);}}>{accessories}</Button>
        </div>
        <Menu
        anchorEl={accessoriesAnchor}
        keepMounted
        open={Boolean(accessoriesAnchor)}
        onClose={()=>{setAccessoriesAnchor(null);}}
        >
        {
            AccessoriesMenuOptions.map((acc,i)=>{
            return <MenuItem key={i} onClick={()=>{setAccessories(acc); setAccessoriesAnchor(null); }}>{acc}</MenuItem>
            })
        }
        </Menu>

        <div className="categorybtn">
        <Button variant="text" color="secondary" id="category" onClick={(e)=>{setGoodAnchor(e.currentTarget);}}>{goods}</Button>
        </div>
        <Menu
        anchorEl={goodsAnchor}
        keepMounted
        open={Boolean(goodsAnchor)}
        onClose={()=>{setAccessoriesAnchor(null);}}
        >
        {
            GoodsMenuOptions.map((goods,i)=>{
            return <MenuItem key={i} onClick={()=>{setGoods(goods); setGoodAnchor(null); }}>{goods}</MenuItem>
            })
        }
        </Menu>

        <div className="categorybtn">
        <Button variant="text" color="secondary" id="category" onClick={(e)=>{setPaidAnchor(e.currentTarget)}}>{paid}</Button>
        </div>
        <Menu
        anchorEl={paidAnchor}
        keepMounted
        open={Boolean(paidAnchor)}
        onClose={()=>{setPaidAnchor(null);}}
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