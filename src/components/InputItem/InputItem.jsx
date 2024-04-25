import { useState } from 'react';
import './InputItem.css';
import "react-toastify/dist/ReactToastify.css";

// import { showSuccess } from '../../utils/showToast';
import { useForm } from 'react-hook-form';

function InputItem({ addItem }) {
    // const [itemName, setItemName] = useState('');
    const {register, handleSubmit} = useForm();

    const handleFormSubmit = (data) => {
        // e.preventDefault();
        // addItem(itemName);
        // setItemName('');
        addItem(data.item);
    }

    return (
        <div className="item-input-wrapper">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <input
                    className="item-input"
                    type="text"
                    placeholder="Add an item..."
                    name='item'
                    {...register('item', {required: true, minLength: 3})}
                />
                <button className='add-item-button' /*onClick={() => showSuccess("Successfully added item")}*/ >
                    Add
                </button>
            </form>
        </div>
    )
}   

export default InputItem;