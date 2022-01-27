import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  //{
  //  path: '',
  //  component: ListComponent
  //  //loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  //},
  {
    path: 'filter', 
    component: FilterComponent
    //loadChildren: () => import('./filter/filter.module').then(m => m.FilterModule)
  },
  {
    path: 'list',
    component: ListComponent
    //loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
