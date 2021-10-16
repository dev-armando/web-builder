import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Landing3Page } from './landing3.page';

const routes: Routes = [
  {
    path: '',
    component: Landing3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Landing3PageRoutingModule {}
