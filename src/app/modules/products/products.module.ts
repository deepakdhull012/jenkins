import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ProductRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
