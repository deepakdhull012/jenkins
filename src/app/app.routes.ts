import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'users',
        loadChildren: './modules/users/users.module#UsersModule'
    },
    {
        path: 'products',
        loadChildren: './modules/products/products.module#ProductsModule'
    },
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    }
];