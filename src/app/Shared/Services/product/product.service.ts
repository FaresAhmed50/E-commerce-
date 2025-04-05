import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Environments} from '../../../Environments/environments';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _httpClient : HttpClient = inject(HttpClient);
  env = Environments


  getAllProducts(pages : number = 1 ) : Observable<any> {

    const params = new HttpParams().set('page', pages.toString());

   return this._httpClient.get(`${this.env.BaseURL}products` , {params: params});
  }

  getSpecificProduct(productId: string) : Observable<any> {
    return this._httpClient.get(`${this.env.BaseURL}products/${productId}`);
  }

  getFilterdProducts(spacificproduct : string) : Observable<Product[]> {

    return this.getAllProducts().pipe(
      map((products ) => products.data.filter(
        (product : Product) => product?.category?.name.toLowerCase().includes(spacificproduct.toLowerCase())
      ))
    )
  }



}
