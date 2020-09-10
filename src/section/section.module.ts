import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionRoutingModule } from './section-routing.module';
import { PersonalSectionComponent } from './components/personal-section/personal-section.component';
import { ProfessionalSectionComponent } from './components/professional-section/professional-section.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PersonalSectionComponent, ProfessionalSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    SectionRoutingModule,
  ]
})
export class SectionModule { }
