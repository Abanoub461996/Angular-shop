import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { IsLoggedService } from '../../is-logged.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  totalItems: number = 0;
  isLogged;

  constructor(private cartService: CartService, private isLoggedInService: IsLoggedService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItems =0
        res.forEach((a: any) => {
          this.totalItems += a.quantity
        })
      })

  }

}
