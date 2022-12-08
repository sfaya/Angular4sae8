import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Core/Model/product';
import { ProductService } from '../Core/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   listProdcuts!: Product[];

  prix!:number;

test:any;
  constructor(private R: Router , private productServ: ProductService    ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
        this.productServ.getAllProducts().subscribe(
      resp => this.listProdcuts=resp,
    //  err => alert('Probleme de back!!'),
      //() => alert('Recuperation effectuée avec suscces!'),
      );
  }



  like(indice:number){

  this.listProdcuts[indice].like++;
  }

  buy(indice:number){
this.listProdcuts[indice].quantity--;

console.log(this.listProdcuts[indice].quantity);

  }

routage(){
this.R.navigate(['users']);
}

edit(id:any){
this.R.navigate(['editProduct', id]);
}

delete(id:Number) {
this.productServ.delete(id).subscribe(
  ()=> (this.getAllProducts(),
        alert('product Deleted')));
}

}
