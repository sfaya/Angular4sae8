import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductsComponent } from './products/products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'a', redirectTo:'products', pathMatch:'full'},
  {path:'products', component:ProductsComponent},
  {path:'users', component:UserComponent},
  {path:'editProduct/:id', component:UpdateProductComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'**', component:ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
