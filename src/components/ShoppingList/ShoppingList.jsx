import './ShoppingList.css';
import "react-toastify/dist/ReactToastify.css";

import ShopHeader from "../Header/ShopHeader";
import InputItem from "../InputItem/InputItem";
import ItemList from '../ItemList/ItemList';
import { ToastContainer } from "react-toastify";
import { useReducer } from 'react';
import itemReducer from '../../Reducers/itemReducer';


function ShoppingList() {

    const [shoppingItems, dispatch] = useReducer(itemReducer, []);

    function increaseQuantity(id) {
        dispatch({
            type: 'increment_item',
            itemId: id
        })
    }

    function decreaseQuantity(id) {
        dispatch({
            type: 'decrement_item',
            itemId: id
        })
    }

    function addItem(name) {
        dispatch({
            type: 'add_item',
            itemName: name,
        })
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