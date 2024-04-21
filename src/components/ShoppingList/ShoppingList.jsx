import './ShoppingList.css';

import ShopHeader from "../Header/ShopHeader";
import InputItem from "../InputItem/InputItem";

function ShoppingList() {
    return (
        <>
        <ShopHeader/>
        <div className="current-shopping-list">
            <InputItem/>
        </div> 
        </>
    )
}

export default ShoppingList;