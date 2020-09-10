import { Component, OnInit } from '@angular/core';
import { ProfessionalSectionModel } from 'src/section/model/professional-section.model';
import * as _ from 'lodash';
@Component({
  selector: 'app-professional-section',
  templateUrl: './professional-section.component.html',
  styleUrls: ['./professional-section.component.scss']
})
export class ProfessionalSectionComponent implements OnInit {
  professionalInfoModel : ProfessionalSectionModel;
  professionalInfoOfEmployees : ProfessionalSectionModel[];
  isShowProfessionalModal : boolean;
  isShowSubmitButton: boolean;
  constructor() {
    this.isShowProfessionalModal = false;
    this.isShowSubmitButton = false;
    this.professionalInfoModel = new ProfessionalSectionModel();
    this.professionalInfoOfEmployees = new Array<ProfessionalSectionModel>();
   }
  ngOnInit(): void {
  }

  openModal() {
    this.isShowProfessionalModal = true;
  }
  clearFields() {
    this.professionalInfoModel = new ProfessionalSectionModel();
    this.isShowSubmitButton = false;
  }

  closeModel() {
    this.isShowProfessionalModal = false;
  }

  submitProfessionalInfo() {
    if(!_.isEmpty(this.professionalInfoModel) && this.isShowSubmitButton) {
      this.professionalInfoOfEmployees.push(this.professionalInfoModel);
    }
    this.isShowProfessionalModal = false;
    this.clearFields();
  }

  showHideSubmitButton() {
    if(this.professionalInfoModel.employeeId !== "" && this.professionalInfoModel.employeeName !== "" && this.professionalInfoModel.gender !== "-1" && this.professionalInfoModel.joiningDate !== null ) {
      this.isShowSubmitButton = true;
    } else {
      this.isShowSubmitButton = false;
    }
  }
}
