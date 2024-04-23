import './ItemList.css';

import Item from '../Item/Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { memo } from 'react';

function ItemList({ shoppingItems, increaseQuantity, decreaseQuantity }) {
    return (
        <div className="shopping-items-wrapper">
            {
                shoppingItems && shoppingItems.map(item => {
                    return (
                        <div key={item.id} className='items-list'>
                            <div 
                                className='change-quantity add-item'
                                onClick={() => increaseQuantity(item.id)}  
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <Item
                                itemName={item.name}
                                quantity={item.quantity}
                            />
                            <div 
                                className='change-quantity remove-item'
                                onClick={() => decreaseQuantity(item.id)}
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default memo(ItemList);