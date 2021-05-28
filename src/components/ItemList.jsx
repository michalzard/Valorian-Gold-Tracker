import React from 'react'
import "../styles/ItemList.scss";

function ItemList() {
    
    return (
        <div className="item_list">
        <Item/>
        </div>
    )
}

export default ItemList;

function Item({photoURL,name,price,}){
    return(
       <div className="item">
        <div className="photo">
        <img src={photoURL ? photoURL : ""} alt=""></img>
        <div className="info">
        <span className="name">{name ? name : "Name"}</span>
        <div className="prices">
        <span>Current price :{price ? price : "0 gold 0 silver"}</span>
        {/* <span>Average to buy price : 0 gold 0 silver</span> */}
    
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