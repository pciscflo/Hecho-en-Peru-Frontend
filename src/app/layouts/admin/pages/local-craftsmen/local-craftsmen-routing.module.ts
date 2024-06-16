import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalCraftsmenComponent } from './local-craftsmen.component';

const routes: Routes = [
  {
    path: '',
    component: LocalCraftsmenComponent,
  },
  {
    path: ':id',
    component: LocalCraftsmanDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalCraftsmenRoutingModule {}
