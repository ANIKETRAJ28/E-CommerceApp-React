import './ShoppingList.css';
import "react-toastify/dist/ReactToastify.css";

import ShopHeader from "../Header/ShopHeader";
import InputItem from "../InputItem/InputItem";
import ItemList from '../ItemList/ItemList';
import { ToastContainer } from "react-toastify";
import { useState } from 'react';

// const shoppingItems = [
//     {id: 1, name: 'Apple', quantity: 2},
//     {id: 2, name: 'Rice', quantity: 3}
// ]

function ShoppingList() {

    const [shoppingItems, setShoppingItems] = useState([]);

    function increaseQuantity(itemId) {
        setShoppingItems(shoppingItems.map(item => {
            if(item.id == itemId) item.quantity++;
            return item;
        }))
    }

    function decreaseQuantity(itemId) {
        setShoppingItems(shoppingItems.map(item => {
            if(item.id == itemId && item.quantity > 0) item.quantity--;
            return item;
        }))
        setShoppingItems(shoppingItems.filter(item => item.quantity > 0));
    }

    function addItem(itemName) {
        if(shoppingItems.length == 0) {
            setShoppingItems([...shoppingItems, {id: 1, name: itemName, quantity: 1}]);
        } else {
            setShoppingItems([...shoppingItems, {id: shoppingItems.length+1, name: itemName, quantity: 1}]);
        }
    }

    return (
        <>
            <ShopHeader/>
            <ToastContainer />
            <div className="current-shopping-list">
                <InputItem addItem = {addItem}/>
                <ItemList shoppingItems={shoppingItems} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
            </div> 
        </>
    )
}

export default ShoppingList;