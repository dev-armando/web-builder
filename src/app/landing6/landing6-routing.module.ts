import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Landing6Page } from './landing6.page';

const routes: Routes = [
  {
    path: '',
    component: Landing6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Landing6PageRoutingModule {}
