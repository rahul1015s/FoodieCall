import { createContext, useReducer } from 'react';


const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

function CartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        // Find the index of the item in the cart that matches the item ID from the action
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    
        // Create a copy of the current state items to avoid direct mutation
        const updatedItems = [...state.items];
    
        if (existingCartItemIndex > -1) { // Check if the item already exists in the cart
            // If the item exists, retrieve the existing item using its index
            const existingItem = state.items[existingCartItemIndex];
    
            // Create an updated item with an incremented quantity
            const updatedItem = {
                ...existingItem, // Keep all other properties of the existing item
                quantity: existingItem.quantity + 1 // Increase the quantity by 1
            };
    
            // Replace the existing item with the updated item in the copied array
            updatedItems[existingCartItemIndex] = updatedItem;
    
        } else { 
            // If the item doesn't exist in the cart, add it as a new entry with a quantity of 1
            updatedItems.push({ ...action.item, quantity: 1 });
        }
    
        // Return the updated state with the modified items array
        return { ...state, items: updatedItems };
    }
    

    if(action.type === 'REMOVE_ITEM') {
       // Find the index of the item in the cart that matches the item ID from the action
       const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
    
       const existingCartItem = state.items[existingCartItemIndex];

       const updatedItems = [...state.items];
       if(existingCartItem.quantity === 1) {
       
        updatedItems.splice(existingCartItemIndex, 1);
       } else {
        const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity - 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
       }

       return { ...state, items: updatedItems };
    }

    return state;
}


export function CartContextProvider ({ children }) {

   const [ cart, dispatchCartAction ] = useReducer(CartReducer, { items: []});

   
    function addItem(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item})
    }

    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id})
    }

    const cartValue = {
        items: cart.items,
        addItem,
        removeItem
    };

    console.log(cartValue);

    return <CartContext.Provider value={cartValue}>{ children }</CartContext.Provider>
}

export default CartContext;