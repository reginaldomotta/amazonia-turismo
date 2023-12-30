import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcaiPage } from './acai.page';

const routes: Routes = [
  {
    path: '',
    component: AcaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcaiPageRoutingModule {}
