import React from 'react'
import "../styles/ItemList.scss";
import defphoto from "../assets/questionmark.png";
import {ReactComponent as Silver} from "../assets/silver.svg";
import Gold from "../assets/chinese-coin.png";
import {Tooltip} from "@material-ui/core";

function ItemList({list}) {
    
    return (
        <div className="item_list">
        {
        list ? list.map((item,i)=> 
        <Item key={i} name={item.itemName} price={item.price} />)
        : null    
        }
        </div>
    )
}

export default ItemList;

function Item({photoURL,name,price}){
    console.log(price);
    return(
       <div className="item">
        <div className="photo">
        <img src={photoURL ? photoURL : defphoto} alt=""></img>
        <div className="info">
        <span className="name">{name ? name : "Name"}</span>
        <div className="prices">
        <span>Current price : {price ? <> 
        <span>{price.gold || 0}</span>
        <Tooltip placement="top" title="Gold">
        <img src={Gold}/>
        </Tooltip>
        <span>{price.silver || 0}</span>
        <Tooltip placement="top" title="Silver">
        <Silver width={30}/>
        </Tooltip>
        </>
        
        : "0 gold 0 silver"}</span>
    
        </div>
        </div>
        </div>
        
       </div> 
    )
}
/**
 *         <span>Photo</div>
        <div>Name</div>
        <div>Price gold silver</div>
        <div>Average to sell price</div>
        <div>Average to buy price</div>
 */