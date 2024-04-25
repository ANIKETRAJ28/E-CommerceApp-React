function itemReducer(state, action) { // action -> {type: `add_item`}
    if(action.type == `add_item`) {
        return [
            ...state, 
            {id: state.length+1, name: action.itemName, quantity: 1}
        ];
    } else if(action.type == `increment_item`) {
        const newstate = state.map(item => {
            if(item.id == action.itemId) {
                item.quantity++;
            }
            return item;
        });
        return newstate;
    } else if(action.type == `decrement_item`) {
        const newstate = state.map(item => {
            if(item.id == action.itemId) {
                item.quantity--;
            }
            return item;
        })
        return newstate.filter(item => item.quantity > 0);
    }
}

export default itemReducer;