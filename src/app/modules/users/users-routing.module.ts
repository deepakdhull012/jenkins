import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';


const userRoutes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: 'list',
                component: UsersListComponent
              },
              {
                  path: 'add',
                  component: AddUserComponent
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
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UsersRoutingModule {

}