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

function Item(){
    return(
       <div className="item">
        <div className="photo">
        <img src="" alt=""></img>
        <div className="info">
        <span className="name">Name</span>
        <div className="prices">
        <span>Current price : 0 gold 0 silver </span>
        <span>Average to sell price : 0 gold 0 silver</span>
        <span>Average to buy price : 0 gold 0 silver</span>
        
        {/* <div className="actions">
        action buttons
        </div>
         */}
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