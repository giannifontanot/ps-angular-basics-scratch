import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "./products";
import {ProductService} from "./products.service";
import {Subscription} from "rxjs";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {

  }

  pageTitle: string = 'Product Detail';
  product!: IProduct;
  imageWidth: number = 200;
  imageMargin: number = 2;
  errMessage: string = '';
  sub!: Subscription;

  ngOnInit(): void {
    let Id: number = Number(this.route.snapshot.paramMap.get('id'));
    alert('Product ID: ' + Id);
    this.pageTitle += `: ${Id}`;
    this.sub = this.productService.getProduct(Id).subscribe({
      next: data => this.product = data,
      error: err => this.errMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  onBack() {
    this.router.navigate(['/products']);
  }

}
