import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistArray: any = [];
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select('wishlistItem').subscribe(
      (data) => {
        if (data) {
          this.removeWishListItem(data);
          this.wishlistArray.push(data)
          }
        }  
    )
    this.wishlistArray = this.wishlistArray.filter((thing, index, self) =>
      index === self.findIndex((t) => (
        t.id === thing.id && t.id === thing.name
      ))
    )
  }
  removeWishListItem(item) {
    this.wishlistArray = this.wishlistArray.filter(function (ele) {
      return ele.id != item.id;
    });
  }
}
