import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }
  // { 
  //   path: '',
  //   redirectTo: 'users',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'users',
  //   component: LayoutComponent
  // },
  // {
  //   path: 'user/:id',
  //   component: LayoutComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
