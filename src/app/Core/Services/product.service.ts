import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Model/product';

@Injectable()

export class ProductService {

  list!:Product[];

URL="http://localhost:3000/products";

  constructor(private http:HttpClient) { }

getAllProducts():Observable<Product[]>{
 return this.http.get<Product[]>(this.URL);
}

getProductById(id:Number):Observable<Product>{
 return this.http.get<Product>(this.URL+'/'+id);
}

addProduct(P: Product):Observable<Product>{
return this.http.post<Product>(this.URL, P);
}

delete(id: Number):Observable<Product>{
  return this.http.delete<Product>(this.URL+'/'+id);
  //delete from list
}

updateProduct(id:Number, P:Product): Observable<Product>{
  return this.http.put<Product>(this.URL+'/'+id, P);
}

}
