import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Router } from '@angular/router';
import { GetProductsService } from '../get-products.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  
  productsList:any;
  constructor(private router: Router, private productService: GetProductsService) { }
  
   
  @ViewChild(ProductCardComponent) childComponent;

  ngOnInit(): void {
    this.productService.getProductsList().subscribe(
      (res: any) => {
        this.productService = res; this.productsList = res;
        this.productsList.forEach((a: any) => {
          Object.assign(a, {
            quantity: 1, total: a.price
          });
        })
        
      });
  }

  receiveProduct(item) {
    this.router.navigate([`product/${item.id}`]);
  }
  
}
