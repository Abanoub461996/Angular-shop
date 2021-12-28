import { CartService } from 'src/app/cart.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WishlistAction} from '../mark-wishlist/mark-wishlist.action'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product;

  @Output() sendProduct = new EventEmitter();

  constructor(private cartService: CartService,private store:Store<any>) { }

  ngOnInit(): void {
    
  }
  sendDataToParent() {
    this.sendProduct.emit(this.product);
  }
  addToCart(item: any) {
    this.cartService.addtoCart(item);
  }
  addToWishlist(item:any) {
    this.store.dispatch(new WishlistAction(item))
  }

}
