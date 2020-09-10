import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalSectionComponent } from './components/personal-section/personal-section.component';
import { ProfessionalSectionComponent } from './components/professional-section/professional-section.component';
import { ROUTES } from './config/config'

const routes: Routes = [
  {
    path: ROUTES.PERSONALSECTION,
    component: PersonalSectionComponent
  } ,
  {
    path: ROUTES.PROFESSIONALSECTION,
    component: ProfessionalSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
