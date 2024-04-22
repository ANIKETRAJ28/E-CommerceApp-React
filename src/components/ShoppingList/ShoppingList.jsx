import './ShoppingList.css';

import ShopHeader from "../Header/ShopHeader";
import InputItem from "../InputItem/InputItem";
import ItemList from '../ItemList/ItemList';

const shoppingItems = [
    {id: 1, name: 'Apple', quantity: 2},
    {id: 2, name: 'Rice', quantity: 3}
]

function ShoppingList() {
    return (
        <>
        <ShopHeader/>
        <div className="current-shopping-list">
            <InputItem/>
            <ItemList shoppingItems={shoppingItems}/>
        </div> 
        </>
    )
}

export default ShoppingList;