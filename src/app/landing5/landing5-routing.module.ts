import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Landing5Page } from './landing5.page';

const routes: Routes = [
  {
    path: '',
    component: Landing5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Landing5PageRoutingModule {}
