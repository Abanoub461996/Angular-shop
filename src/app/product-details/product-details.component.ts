import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../get-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;

  constructor(private productService: GetProductsService, private activeRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      console.log("params ", params);
      this.product = params.id
    })
    this.productService.getProduct(this.product).subscribe(
      (res: any) => { this.productService = res; this.product = res },
      (error) => { console.log(error) })
  }
}
