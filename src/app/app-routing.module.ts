import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES } from '../section/config/config'
const routes: Routes = [
  {
    path : ROUTES.SECTION,
    loadChildren: () => import('../section/section.module').then(m => m.SectionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
