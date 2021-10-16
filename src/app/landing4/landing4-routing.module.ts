import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Landing4Page } from './landing4.page';

const routes: Routes = [
  {
    path: '',
    component: Landing4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Landing4PageRoutingModule {}
