import {Component, inject, OnInit} from '@angular/core';
import {CardItemComponent} from '../../../Shared/UI/cardItem/card-item/card-item.component';
import {CategoriesService} from '../../../Shared/Services/categories/categories.service';
import {ProductService} from '../../../Shared/Services/product/product.service';

@Component({
  selector: 'app-shop',
  imports: [
    CardItemComponent
  ],
  templateUrl: './shop.component.html',
  standalone: true,
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {

  _categoriesService :CategoriesService = inject(CategoriesService);
  _productService : ProductService = inject(ProductService);


  ngOnInit() {
  }

  getCategories(){
    this._categoriesService.getAllCategories().subscribe({
      next: result => {
        console.log(result);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {}
    })
  }




}
