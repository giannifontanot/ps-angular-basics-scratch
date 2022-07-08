import {Component, OnInit} from "@angular/core";
import {IProduct} from "./products";
import {ProductService} from "./products.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {

  }
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  private _listFilter: string = '';
  filteredProducts: IProduct[] = [];

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
    this.listFilter = 'cart';
    this.productsOriginal = this.productService.getProducts();
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productsOriginal.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked($event: string): void {
this.pageTitle = 'Product List: ' + $event;
  }
}
