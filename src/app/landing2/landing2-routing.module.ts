import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Landing2Page } from './landing2.page';

const routes: Routes = [
  {
    path: '',
    component: Landing2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Landing2PageRoutingModule {}
