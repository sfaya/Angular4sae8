import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Core/Model/product';
import { ProductService } from '../Core/Services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id!:Number;
  product!:Product;

  constructor( private actR:ActivatedRoute, private ProductS: ProductService, private R:Router) { }

  ngOnInit(): void {
  // this.id= this.actR.snapshot.params['id'];
  this.actR.paramMap.subscribe(params => this.id=Number(params.get('id')));
  this.ProductS.getProductById(this.id).subscribe(
     resp => this.product=resp
  )
  }

  update(F:NgForm){
this.ProductS.updateProduct(this.id, this.product).subscribe(
  () => this.R.navigate(['products'])
);
  }
}
