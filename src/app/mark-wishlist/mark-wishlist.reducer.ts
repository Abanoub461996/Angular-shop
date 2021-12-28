import { state } from '@angular/animations';
import { WishlistComponent } from './../wishlist/wishlist.component';
import { WishlistAction } from "./mark-wishlist.action";

// const initaialValue = {};
let initaialValue = {
    id: 0
}
export function markToWishlist(state = initaialValue, action: WishlistAction) {
    {
        switch (action.type) {
            case "SET_WISHLIST":
                return {
                    ...state,
                    title: action.payload.title,
                    image: action.payload.image,
                    id : action.payload.id
                }
            default:
                return state;      
        }   
    }
    
}