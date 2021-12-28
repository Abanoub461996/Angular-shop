import { Action } from '@ngrx/store';


export class WishlistAction implements Action {
    readonly type = 'SET_WISHLIST';
    constructor(public payload) { }
}
