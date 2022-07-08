import {Injectable} from "@angular/core";
import {IProduct} from "./products";

@Injectable( {
providedIn: 'root'
})
export class ProductService{

  getProducts(): IProduct[] {

    return [
      {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 4.2,
        "imageUrl": "assets/images/leaf_rake.png"
      }, {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 3.2,
        "imageUrl": "assets/images/garden_cart.png"
      }, {
        "productId": 3,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2021",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      }
    ];
  }
}
