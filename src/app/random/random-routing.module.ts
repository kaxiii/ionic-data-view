import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomPage } from './random.page';

const routes: Routes = [
  {
    path: '',
    component: RandomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomPageRoutingModule {}
