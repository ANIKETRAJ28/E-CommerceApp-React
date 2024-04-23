import { useState } from 'react';
import './InputItem.css';
import "react-toastify/dist/ReactToastify.css";

// import { showSuccess } from '../../utils/showToast';

function InputItem({ addItem }) {
    const [itemName, setItemName] = useState('');
    return (
        <div className="item-input-wrapper">
            <input
                className="item-input"
                type="text"
                placeholder="Add an item..."
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
            />
            <button 
                className='add-item-button' 
                onClick={() => {
                    addItem(itemName);
                    setItemName('');
                }} /*onClick={() => showSuccess("Successfully added item")}*/ >
                Add
            </button>
        </div>
    )
}   

export default InputItem;