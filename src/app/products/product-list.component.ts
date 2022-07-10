import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {IProduct} from "./products";
import {ProductService} from "./products.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService) {

  }

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string = '';
  filteredProducts: IProduct[] = [];
  errMessage: string = '';
  sub!: Subscription;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log(value);
    this.filteredProducts = this.performFilter(value);
  }

  productsOriginal: IProduct [] = [];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: data => {
        this.productsOriginal = data;
        this.filteredProducts = this.productsOriginal;
        return this.filteredProducts;
      },
      error: err => this.errMessage = err
    });
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productsOriginal.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked($event: string): void {
    this.pageTitle = 'Product List: ' + $event;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
