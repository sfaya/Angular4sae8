import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../Core/Model/product';
import { ProductService } from '../Core/Services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


listLength!:number;
product={id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0};

  constructor( private productS: ProductService, private R: Router) { }

  ngOnInit(): void {
this.productS.getAllProducts().subscribe(data => this.listLength=data.length);
  }

  save(F:NgForm){

    this.product.id= this.listLength+1
    this.productS.addProduct(this.product).subscribe(
         () => this.R.navigate(['products'])

    );



  }
}
