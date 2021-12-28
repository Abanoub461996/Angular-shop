import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  repeatedItem;
  cartItemList = []
  productList = new BehaviorSubject([]);


  constructor() { }
  getProducts() {
    return this.productList.asObservable();
  }
  addtoCart(product: any) {
  
    if (this.cartItemList.includes(product)) {
      this.repeatedItem = this.cartItemList[this.cartItemList.indexOf(product)]
      this.repeatedItem.quantity = this.repeatedItem.quantity +1
    } else {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    }
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.price * a.quantity;
    })
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}