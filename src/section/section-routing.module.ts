import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalSectionComponent } from './components/personal-section/personal-section.component';
import { ProfessionalSectionComponent } from './components/professional-section/professional-section.component';

const routes: Routes = [
  {
    path: 'personal',
    component: PersonalSectionComponent
  } ,
  {
    path: 'professional',
    component: ProfessionalSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
