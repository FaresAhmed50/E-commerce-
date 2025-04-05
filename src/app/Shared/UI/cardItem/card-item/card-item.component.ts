import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from '../../../Services/product/product.service';
import {filter, map, Subscription} from 'rxjs';
import {Product} from '../../../Interface/product/product';

@Component({
  selector: 'app-card-item',
  imports: [],
  templateUrl: './card-item.component.html',
  standalone: true,
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent implements OnInit , OnDestroy {

  _productService : ProductService = inject(ProductService);
  subscription : Subscription = new Subscription();
  allProducts: Product[] = [];


  ngOnInit() {
    this.getProducts();
    this.getFilteredProducts("Women's Fashion");
  }

  getProducts(){
    this.subscription = this._productService.getAllProducts(1).subscribe({
      next: result => {
        console.log(result);
        this.allProducts = result.data;
        console.log(this.allProducts);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {}
    })
  }

  getFilteredProducts(specificproduct : string){
    this.subscription = this._productService.getFilteredProducts(specificproduct).subscribe({
      next: result => {
        console.log(result);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {}
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
