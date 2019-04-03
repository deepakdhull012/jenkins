import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsComponent } from './products.component';

const productRoutes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        children: [
            {
                path: 'list',
                component: ProductsListComponent
              },
              {
                  path: 'add',
                  component: AddProductComponent
              },
              {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            }
        ]
      }
  ];


@NgModule({
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule {

}