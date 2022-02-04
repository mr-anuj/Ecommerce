import
 {
     ADD_TO_CART,REMOVE_FROM_CART
 } 
from"../constants/cartConstants"

export const cartReducers = (state={cartItems:[]},action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const item = action.payload
            const isItemExists = state.cartItems.find(i => i.product === item.product) // i.product here i is normail veriable and product come from cartActions payload
            if(isItemExists){
                return{
                    ...state,
                    cartItems:state.cartItems.map(i=>i.product === isItemExists)
                }
            }
            else {
                return {
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }
            default:
                return state
            
    }
}
